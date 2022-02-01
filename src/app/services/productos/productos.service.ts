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

    getUltimo(){
      return this.http.get(this.url +'/products/productoimagen');
    }

  //get productos
  getProductos(){
    return this.http.get(this.url +'/productos');
  }
  
  //add
  addProducto(producto:Producto){
    return this.http.post(this.url+'/products/registroproductos',producto)
  }

  //get un producto
  
  getProducto(id_producto:string){
    return this.http.get(this.url+'/producto/'+id_producto);
  }
  //eliminar
  deleteProduc(id:string){
    return this.http.delete(this.url+'/eliminarpr/'+id);
  }

  //modificar productoS
  editProducto(id_usuario:string| undefined, user:Producto){
    return this.http.put(this.url+'/editarpr/'+id_usuario, user);
  }

  //Extraer un producto para viewproduct
  getPro(id_producto:string){
    return this.http.get(this.url+'/vistapro/'+id_producto);
  }

}
    export interface Producto{
id_producto?:string | any;
nombre?:string | any;
precio?:string | any;
tipo?:string | any;
stock?:string | any;
descripcion?: string | any;
id_usuario?: string | any;
id_empresa?: string | any;
nombre_empresa?:string|any;
imagen?:string|any;
    }
