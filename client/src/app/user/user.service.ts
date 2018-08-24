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
    super(http,authService,router);
  }

  public getEndPoint(): string {
    return 'user';
  }

  public verifyToken(token: String): Observable<ApiResponse> {
    return this.http.post(this.getEndPointUri() + 'verifyToken', { token: token }).pipe(map((res: ApiResponse) => {
        return res;
    }));
  }

  /** GET heroes from the server */
  public login ( username: String, password: String): Observable<User[]> {

    return this.http.post<User[]>(this.getEndPointUri() + 'login', {username,password}, this.getHttpOptions())
      .pipe(
        map((results: ApiResponse) => {
          return results.data;
        }),
        tap(data => {
          if(data){
            this.authService.setUser( data );
          }
        }),
        catchError(this.handleError('userLogin', []))
      );
  }
}
