import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MyHttpClientService } from '@app/cross/service/myhttpclient.service';
import { AuthService } from '@app/cross/service/auth.service';
import { Cost } from '@app/cost/cost';

@Injectable({
  providedIn: 'root'
})
export class CostService extends MyHttpClientService<Cost> {

  constructor(
    httpClient: HttpClient,
    authService: AuthService,
    router: Router
  ) {
    super(httpClient,authService,router);
  }

  public getEndPoint(): string {
    return 'cost';
  }
}
