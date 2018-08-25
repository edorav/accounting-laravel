import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppComponent } from '@app/app.component';
import { LoginComponent } from '@app/user/login/login.component';
import { ProfileComponent } from '@app/user/profile/profile.component';
import { DashboardComponent } from '@app/dashboard/dashboard.component';
import { HouseComponent } from '@app/house/house.component';
import { HouseDetailComponent } from '@app/house/house-detail/house-detail.component';
import { CostComponent } from '@app/cost/cost.component';
import { CostDetailComponent } from '@app/cost/cost-detail/cost-detail.component';
import { ConfirmComponent } from '@app/cross/component/confirm/confirm.component';
import { appRoutes } from '@app/app.routes';
import { SignupComponent } from '@app/user/signup/signup.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    DashboardComponent,
    HouseComponent,
    HouseDetailComponent,
    CostComponent,
    CostDetailComponent,
    ConfirmComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
      // { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
  })
  ],
  entryComponents: [
    ConfirmComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
