import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MyHttpClientService } from '@app/cross/service/myhttpclient.service';
import { House } from '@app/house/house';
import { AuthService } from '@app/cross/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HouseService extends MyHttpClientService<House> {

  constructor(
    httpClient: HttpClient,
    authService: AuthService,
    router: Router
  ) {
    super(httpClient,authService,router);
  }

  public getEndPoint(): string {
    return 'home';
  }
}
