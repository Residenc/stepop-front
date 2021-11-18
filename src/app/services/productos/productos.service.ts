import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  url='http://localhost:3000';
  constructor(private http: HttpClient) { }
    //get listarproyser
    getlistarproyser(){
      return this.http.get(this.url + '/listarproyser');
    }
    //get lsista servicio
    getlistaservicio(){
      return this.http.get(this.url +'/listaservi');
    }
  
    //get lsista producto
    getlistaproduc(){
      return this.http.get(this.url +'/listaproduc');
    }

  //get productos
  getProductos(){
    return this.http.get(this.url +'/productos');
  }
  
  //get un producto
  
  getProducto(id_produc:string){
    return this.http.get(this.url+'/producto/'+id_produc);
  }
  //eliminar
  deleteProduc(id:string){
    return this.http.delete(this.url+'/eliminarpr/'+id);
  }

  //modificar productoS
  editProducto(id_usuario:string| undefined, user:Producto){
    return this.http.put(this.url+'/editarpr/'+id_usuario, user);
  }
}
    export interface Producto{
id_produc?:string | any;
nombre?:string | any;
precio?:string | any;
tipo?:string | any;
stock?:string | any;
descripcion?: string | any;
id_usuario?: string | any;
id_empresa?: string | any;
nombre_empresa?:string|any;
    }
