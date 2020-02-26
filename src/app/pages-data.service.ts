import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Items } from './pages/create-item/items';

@Injectable({
  providedIn: 'root'
})
export class PagesDataService {

  baseUrl = 'http://10.10.10.124:808/api/ActivityAdd/AngularManipulation';
  constructor(private http: HttpClient) { }

  createItem(items: Items): Observable<Items> {
    const body = JSON.stringify(items);
    // const body = admin;
    console.log(body);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post<Items>(this.baseUrl, body, {
      headers
    });
  }
  getAllItem(): Observable<Items> {
    const Items = { "Flag": "6" };
    const body = JSON.stringify(Items);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post<Items>(this.baseUrl, body, {
      headers
    });
  }
  updateItem(items: Items): Observable<Items> {
    const body = JSON.stringify(items);
    console.log(body);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post<Items>(this.baseUrl, body, {
      headers
    });
  }
  deleteItem(items: Items): Observable<Items> {
    const body = JSON.stringify(items);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post<Items>(this.baseUrl, body, {
      headers
    });
  }
}
