import { Injectable } from '@angular/core';
import { NewOrder } from './pages/new-order/new-order';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewOrderService {


  baseUrl = 'http://localhost:58706/api/ActivityAdd/AngularManipulation';
  constructor(private http: HttpClient) { }

  createNewOrder(newOrder: NewOrder): Observable<NewOrder> {
    const body = JSON.stringify(newOrder);
    // const body = admin;
    console.log(body);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post<NewOrder>(this.baseUrl, body, {
      headers
    });
  }
  getAllOrder(): Observable<NewOrder> {
    const newOrder = { "Flag": "8" };
    const body = JSON.stringify(newOrder);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post<NewOrder>(this.baseUrl, body, {
      headers
    });
  }

  getAllItems(): Observable<NewOrder> {
    const newOrder = { "Flag": "11" };
    const body = JSON.stringify(newOrder);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post<NewOrder>(this.baseUrl, body, {
      headers
    });
  }
  getItemPrice(newOrder: NewOrder): Observable<NewOrder> {
    console.log(newOrder);
    const body = JSON.stringify(newOrder);
    console.log(body);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post<NewOrder>(this.baseUrl, body, {
      headers
    });
  }

  deleteOrder(newOrder: NewOrder): Observable<NewOrder> {
    const body = JSON.stringify(newOrder);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post<NewOrder>(this.baseUrl, body, {
      headers
    });
  }
}
