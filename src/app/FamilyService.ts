import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Child} from './Child';
import {Family} from './Family';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  // getCustomer(id: number): Observable<Object> {
  //   return this.http.get(`${this.baseUrl}/${id}`);
  // }

  getFamilyByPeselChild(pesel: string): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/getFamilyByPeselChild/${pesel}`);
  }

  getFamilyByNameChild(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/getFamilyByFirstNameChild/${name}`);
  }

  getFamilyBySecondNameChild(secondName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/getFamilyBySecondNameChild/${secondName}`);
  }

  getFamilyBySexChild(sex: string): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/getFamilyBySexChild/${sex}`);
  }

  getFamilyByBirthDateChild(birthdate: string): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/getFamilyByBirthDateChild/${birthdate}`);
  }

  createFamily(family: Family): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/addFamily`, family);
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
  getFamilyList(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/getFamilies`);
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
