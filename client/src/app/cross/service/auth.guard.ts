import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from '../../user/user.service';
import { ApiResponse } from '../model/apiresponse';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(
      private _router: Router,
      private _authService: AuthService,
      private _userService: UserService
  ) { }

  canActivate(): boolean {
    const token = this._authService.getToken();
    if (token) {
      this._userService.verifyToken().subscribe((response) => {
        if (response) {
          this._authService.setUser( JSON.stringify(response) );
        } else {
          this._authService.destroySession();
          this._router.navigate(['/login']);
          return false;
        }
      });
      return true;
    } else {
      this._authService.destroySession();
      this._router.navigate(['/login']);
      return false;
    }
  }
}
