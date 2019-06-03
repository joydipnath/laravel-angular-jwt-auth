import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { APP_CONFIG } from '../../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class LoginSignupService {

  constructor(private http: HttpClient) { }

  login(data){
  	return this.http.post('http://localhost:8000/api/login', data);
  }

  signup(data){
  	return this.http.post('http://localhost:8000/api/signup', data);
  }

  sendPasswordResetLink(data){

  	return this.http.post('http://localhost:8000/api/sendPasswordResetLink', data);
  }

}
