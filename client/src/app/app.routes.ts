import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './user/login/login.component';
import { HouseDetailComponent } from './house/house-detail/house-detail.component';
import { Routes } from '@angular/router';
import { AuthenticationGuard } from '@app/cross/service/auth.guard';
import { ProfileComponent } from '@app/user/profile/profile.component';

export const appRoutes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthenticationGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'house', component: HouseDetailComponent },
  { path: 'house/:id', component: HouseDetailComponent },
  { path: 'my-profile', component: ProfileComponent },
  // { path: '**', component: PageNotFoundComponent }
];
