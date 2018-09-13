import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Father} from './Father';

@Injectable({
  providedIn: 'root'
})
export class FatherService{

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  // getCustomer(id: number): Observable<Object> {
  //   return this.http.get(`${this.baseUrl}/${id}`);
  // }

  createCustomer(father: Father): Observable<any> {
    return this.http.post(`${this.baseUrl}` + `/addFather`, father);
  }
  //
  // updateCustomer(id: number, value: any): Observable<Object> {
  //   return this.http.put(`${this.baseUrl}/${id}`, value);
  // }
  //
  // deleteCustomer(id: number): Observable<any> {
  //   return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  // }
  //
  getFathersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + '/getFathers');
  }
  //
  // getCustomersByAge(age: number): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/age/${age}`);
  // }
  //
  // deleteAll(): Observable<any> {
  //   return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  // }
}
