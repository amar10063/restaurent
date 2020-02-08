import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateItemComponent } from './pages/create-item/create-item.component';
import { LoginComponent } from './login/login.component';
import { NewOrderComponent } from './pages/new-order/new-order.component';

const routes: Routes = [
  {path: '', redirectTo: '', component: LoginComponent, pathMatch: 'full'},
  {path: 'Login', component: LoginComponent},
  {path: 'Dashboard', component: DashboardComponent},
  {path: 'CreateItem', component: CreateItemComponent},
  {path: 'newOrder', component: NewOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
