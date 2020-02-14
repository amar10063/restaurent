import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginAdmin } from './login/login-admin';
import {Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  baseUrl = '';
  constructor(private http: HttpClient) { }

  adminLogin(admin: LoginAdmin): Observable<LoginAdmin> {
    const body = JSON.stringify(admin);
    console.log(body);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post<LoginAdmin>(this.baseUrl, body, {
      headers
    });
  }
}
