import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  token = localStorage.getItem('id')
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    })
  };
  optionsUser = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  login(url, data){
    return this.http.post(this.baseUrl+url, data, this.optionsUser)
  }

  signup(url, data){
    console.log(this.baseUrl+url);
    return this.http.post(this.baseUrl+url, data, this.optionsUser)
  }

  get(url){
    return this.http.get(this.baseUrl+url, this.options)
  }

  post(url, data){
    return this.http.post(this.baseUrl+url, data, this.options)
  }

  put(url, data){
    return this.http.put(this.baseUrl+url, data, this.options)
  }
}
