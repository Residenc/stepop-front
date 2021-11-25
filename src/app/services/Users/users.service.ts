import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url='http://localhost:3000';
  constructor(private http: HttpClient) { }

  getUsuario(id_user:string){
    return this.http.get(this.url+'/usuario/'+id_user);
  }

  register(user:User){
    return this.http.post(this.url+'/registro',user);
  }

  getUsuarios()
  {
    return this.http.get(this.url +'/usuarios');
  }
  

}
export interface User{
  id_usuario?:string | any;
  nombre_usuario?:string | any;
  apellidos?:string | any;
  email?:string | any;
  password?:string | any;
}
