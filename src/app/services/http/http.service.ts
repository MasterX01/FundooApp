import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  login(url, data){
    return this.http.post(this.baseUrl+url, data, this.options)
  }

  signup(url, data){
    console.log(this.baseUrl+url);
    return this.http.post(this.baseUrl+url, this.options, data)
  }
}
