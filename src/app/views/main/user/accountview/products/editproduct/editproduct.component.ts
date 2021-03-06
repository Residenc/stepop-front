import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { Producto, ProductosService } from 'src/app/services/productos/productos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.scss']
})
export class EditproductComponent implements OnInit {
  modifyForm= new FormGroup({
    nombre:new FormControl(''),
    precio:new FormControl(''),
    tipo:new FormControl(''),
    stock:new FormControl(''),
    descripcion:new FormControl(''),
  })
  usuario:Producto={
    id_producto:'',
    nombre:'',
    precio:'', 
    tipo:'',
    stock:'',
    descripcion:'',
    imagen:''
  };
 


  constructor(
                private productoServices:ProductosService,
                private router:Router,
                private location: Location,
                private activeRoute:ActivatedRoute
                ) { 
  }

  ngOnInit(): void {
    const params =this.activeRoute.snapshot.params;
    console.log(params);
    if(params.id){
      this.productoServices.getProducto(params.id).subscribe(
        res =>{
          console.log(res);
          this.usuario=res;
        },
        err => console.log(err)
      )
    }
  
  }
  modificar(){
    this.productoServices.editProducto(this.usuario.id_producto, this.usuario).subscribe(
    res =>{
      console.log(res);
      this.router.navigate(['accountview/products']);
      console.log("conseguido");
    },
    err =>{
      console.log(err)
    }
    )
  }

  back(): void {
    this.location.back()
  }
  
 
}
