import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadScriptsService } from 'src/app/services/load-scripts/load-scripts.service';
import { Producto, ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

    ListarProducto: Producto [ ] | any;

  constructor(
    private loadScripts:LoadScriptsService, 
    public productoService:ProductosService, 
    private router: Router) { 
    loadScripts.loadS(["tooltip"]);
    loadScripts.loadS(["checkdisplay_account"]);
  }

  
 


  ngOnInit(): void {
    this.listarProducto();
  }
  listarProducto(){
    this.productoService.getProductos().subscribe(
      res=>{
        console.log(res);
        this.ListarProducto=<any>res;
      },
      err=> console.log(err)
    )
  }
  eliminar(id_product:string )
  {
    try {
      this.productoService.deleteProduc(id_product).subscribe(
        res=>{
          console.log('Producto eliminado');
          this.listarProducto();
        },
        err=> console.log(err)
        );
    } catch (error) {
      console.log(error)
    }

  }}
