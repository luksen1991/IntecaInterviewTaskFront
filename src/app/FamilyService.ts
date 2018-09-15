import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Child} from './Child';
import {Family} from './Family';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  private baseUrl = 'http://localhost:8081/api';

  constructor(private http: HttpClient) { }

  getFamList(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + '/getFamilies');
  }

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
}
