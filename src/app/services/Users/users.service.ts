import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url='http://localhost:3000';
  constructor(private http: HttpClient) { }

  register(user:User){
    return this.http.post(this.url+'/registro',user);
  }

}
export interface User{
  id_user?:string | any;
  nombre?:string | any;
  apellidos?:string | any;
  email?:string | any;
  password?:string | any;
}
