import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private resoure = 'http://localhost:3000/' + 'api/';

  constructor(private http: HttpClient) {}

  getTextTranlate(req): Observable<any> {
    const option = this.setParam(req);
    return this.http.get<any>(this.resoure + 'text', {params: req, observe: 'response'});
  }

  setParam(req) {
    let option: HttpParams = new HttpParams();
    if (req) {
      Object.keys(req).forEach(key => {
        option = option.set(key, req[key]);
      })
    }
  }
}
