import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapsService {
  headers: HttpHeaders = new HttpHeaders();

  constructor(private http: HttpClient) {
  }

  location(adress: string) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${adress}&key=AIzaSyAYJh9SliO5RU9Ys8V4HtGvRx7v_QV26LE`;

    return this.http
      .get(url, {headers: this.headers});
  }
}
