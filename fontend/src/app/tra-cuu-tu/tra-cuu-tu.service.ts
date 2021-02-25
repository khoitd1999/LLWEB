import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraCuuTuService {

  private resoure = 'http://localhost:3000/' + 'api/tra-cuu-tu';

  constructor(private http: HttpClient) {}

  getTextTranlate(req): Observable<any> {
    const option = this.setParam(req);
    return this.http.get<any>(this.resoure, {params: req, observe: 'response'});
  }

  setParam(req) {
    let option: HttpParams = new HttpParams();
    if (req) {
      Object.keys(req).forEach(key => {
        option = option.set(key, req[key]);
      })
    }
  }

  saveTextTranslate(req): Observable<any> {
    return this.http.post<any>(this.resoure + '/' + req, {observe: 'response'});
  }
}
