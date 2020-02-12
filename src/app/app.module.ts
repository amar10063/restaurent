import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateItemComponent } from './pages/create-item/create-item.component';
import { LoginComponent } from './login/login.component';
import { NewOrderComponent } from './pages/new-order/new-order.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    
    DashboardComponent,
    CreateItemComponent,
    LoginComponent,
    NewOrderComponent
   
  ],
  imports: [
    BrowserModule, ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
