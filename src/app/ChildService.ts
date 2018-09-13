import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChildService {

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  // getCustomer(id: number): Observable<Object> {
  //   return this.http.get(`${this.baseUrl}/${id}`);
  // }

  createChild(child: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/addChild`, child);
  }
  //
  getChildOfFamily(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/getChildF/${id}`);
  }
  //
  // deleteCustomer(id: number): Observable<any> {
  //   return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  // }
  //
  getChildrenList(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + '/getChildren');
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
