import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { LoadScriptsService } from 'src/app/services/load-scripts/load-scripts.service';
import { Producto, ProductosService } from 'src/app/services/productos/productos.service';
import { CartComponent } from 'src/app/views/header/bs_components/offcanvas/cart/cart.component';
@Component({
  selector: 'app-general-view',
  templateUrl: './general-view.component.html',
  styleUrls: ['./general-view.component.scss']
})
export class GeneralViewComponent implements OnInit {
 
  ListarProducto:Producto []|any;
 
  constructor(private cartService:CartService ,private loadScripts:LoadScriptsService, public productoService:ProductosService, private router:Router) { 
    loadScripts.loadS(["tooltip"]);
    loadScripts.loadS(["scrollAOS"]);
  }

  ngOnInit(): void {
    this.listarProduc();
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  listarProduc(){
    this.productoService.getlistarproyser().subscribe(
      res=>{

        console.log(res);
        this.ListarProducto=<any>res;
      },
      err=> console.log(err)
    )
  }


}
