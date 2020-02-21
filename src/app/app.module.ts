import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateItemComponent } from './pages/create-item/create-item.component';
import { LoginComponent } from './login/login.component';
import { NewOrderComponent } from './pages/new-order/new-order.component';
import { LoginServiceService } from './login-service.service';
import { AuthGuard } from './auth.guard';


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
    BrowserModule, ReactiveFormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [LoginServiceService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
