import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./user/login/login.component";
import { HouseDetailComponent } from "./house/house-detail/house-detail.component";
import { Routes } from "@angular/router";

export const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'house', component: HouseDetailComponent },
  { path: 'house/:id', component: HouseDetailComponent },
  // { path: '**', component: PageNotFoundComponent }
];
