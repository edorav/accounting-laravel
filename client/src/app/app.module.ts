import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
