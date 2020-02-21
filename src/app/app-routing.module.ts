import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateItemComponent } from './pages/create-item/create-item.component';
import { LoginComponent } from './login/login.component';
import { NewOrderComponent } from './pages/new-order/new-order.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '', component: LoginComponent, pathMatch: 'full'},
  {path: 'Login', component: LoginComponent},
  {path: 'Dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'CreateItem', component: CreateItemComponent, canActivate: [AuthGuard]},
  {path: 'newOrder', component: NewOrderComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
