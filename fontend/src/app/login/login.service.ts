import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { createParams } from '../share/request-param';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private resoure = 'http://localhost:3000/' + 'api/user';
  constructor(private http: HttpClient) { }

  createAccount(req): Observable<any> {
    return this.http.post<any>(this.resoure, req, {observe: 'response'});
  }
}
