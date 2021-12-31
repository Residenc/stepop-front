import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url='http://localhost:3000';
  
  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService) { }

  signIn(auth:Auth){
    return this.http.post(`${this.url}/login`,auth);
    }

    isAuth():boolean{
      const token: string| any = localStorage.getItem('token');
      if(this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('token') ){
        return false;
      }
      return true;
    }
}
export interface Auth{
  email?: string | any ;
  password?:string | any;
}