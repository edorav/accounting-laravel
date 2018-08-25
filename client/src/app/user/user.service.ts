import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '@app/cross/service/auth.service';
import { MyHttpClientService } from '@app/cross/service/myhttpclient.service';
import { User } from '@app/user/user';
import { ApiResponse } from '@app/cross/model/apiresponse';

@Injectable({
  providedIn: 'root'
})
export class UserService extends MyHttpClientService<User> {

  constructor(
    http: HttpClient,
    authService: AuthService,
    router: Router
  ) {
    super(http, authService, router);
  }

  public getEndPoint(): string {
    return 'user';
  }

  public verifyToken(): Observable<User> {
    return this.http.post(this.getEndPointUri() + 'verifyToken', {} , this.getHttpOptions()).pipe(map((res: User) => {
        return res;
    }));
  }

  /** GET heroes from the server */
  public login ( email: String, password: String): Observable<User[]> {

    return this.http.post<User[]>(this.getEndPointUri() + 'login', {email , password}, this.getHttpOptions())
      .pipe(
        tap(data => {
          if (data) {
            this.authService.setToken( JSON.stringify(data) );
          }
        }),
        catchError(this.handleError('userLogin', []))
      );
  }
}
