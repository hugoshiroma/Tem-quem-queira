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

  locationWithNumber(cep: number, numero: number): {lat: number, long: number} {
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${cep}&key=AIzaSyAYJh9SliO5RU9Ys8V4HtGvRx7v_QV26LE`;

    this.http
      .get(url, {headers: this.headers})
      .subscribe(x => {
        if (x !== undefined && x !== null) {
          if (x.results.length > 0) {
            console.log(x.results[0]);
            let address = x.results[0].address_components[1].long_name + ', '
            + numero + ' - '
            + x.results[0].address_components[2].long_name
            + ', ' + x.results[0].address_components[3].long_name;
            url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAYJh9SliO5RU9Ys8V4HtGvRx7v_QV26LE`;
            this.http
              .get(url, {headers: this.headers})
              .subscribe(y => {
                if (y !== undefined && y !== null) {
                  if (y.results.length > 0) {
                    return {lat: y.results[0].geometry.location.lat, long: y.results[0].geometry.location.lng};
                  }
                }
              });
          }
        }
      });
  }
}
