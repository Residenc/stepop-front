import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadScriptsService } from 'src/app/services/load-scripts/load-scripts.service';
import { Producto, ProductosService } from 'src/app/services/productos/productos.service';
@Component({
  selector: 'app-general-view',
  templateUrl: './general-view.component.html',
  styleUrls: ['./general-view.component.scss']
})
export class GeneralViewComponent implements OnInit {
  ListarProducto:Producto []|any;
  constructor(
    private loadScripts:LoadScriptsService,
    public productoService:ProductosService,
    private router:Router
    ) { 
    loadScripts.loadS(["moretext"]);
  }

  ngOnInit(): void {
    this.listarProduc();
    
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

  prueba(id_produc:undefined){
    this.router.navigate(['viewproduct/'+ id_produc])
  }

}
