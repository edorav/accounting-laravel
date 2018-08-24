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
      private _userService : UserService
  ) { }

  canActivate(): boolean {

    let res: Promise<boolean>;
    //resolve(true);
    let token = this._authService.getToken();
    if(token){
      this._userService.verifyToken(token).subscribe((response: ApiResponse)=>{
        if(response.data){
          this._authService.setUser( response.data );
        }else{
          this._authService.destroySession();
          this._router.navigate(['/login']);
          return false;
        }
      });
      return true;
    }else{
      this._authService.destroySession();
      this._router.navigate(['/login']);
      return false;
    }
  }
}
