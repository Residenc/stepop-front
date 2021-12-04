import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdressService {
  url="http://localhost:3000"
  constructor(private http: HttpClient) { }

  getEstados()
  {
    return this.http.get(this.url +'/estados');
  }

  getColonias()
  {
    return this.http.get(this.url +'/colonias');
  }
}



export interface Colonia{
  id_colonia?:string | any;
  nombre?:string | any;

}

export interface Estado{
  id_estado?:string | any;
  nombre?:string | any;

}