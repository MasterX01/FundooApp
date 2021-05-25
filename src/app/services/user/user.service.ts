import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpService) { }

  login(data){
    return this.http.login('user/login', data)
  }
  signup(data){
    return this.http.signup('user/userSignUp', data)
  }

}
