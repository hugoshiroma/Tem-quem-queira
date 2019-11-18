import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MapsService {
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  public getAdress(cep: string) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${cep}&key=AIzaSyAYJh9SliO5RU9Ys8V4HtGvRx7v_QV26LE`;

    return this.http
        .get(url, { headers: this.headers })
        .pipe(catchError(this.handleError));
  }

  handleError(error: any): Observable<any> {
    console.log(error || 'Server error');
    return throwError(error || 'Server error');
  }
}
