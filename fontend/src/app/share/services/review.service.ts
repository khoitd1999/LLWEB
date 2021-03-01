import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private resourceUrl = 'http://localhost:3000/' + 'api/review';

  constructor(
    private http: HttpClient
  ) { }

  saveWordToReview(req): Observable<any> {
    return this.http.post<any>(this.resourceUrl, req, { observe: 'response' });
  }
}
