import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadScriptsService } from 'src/app/services/load-scripts/load-scripts.service';
import { Producto, ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {
  producto:Producto={
    id_produc:'',
    nombre:'',
    precio:'', 
    tipo:'',
    stock:'',
    descripcion:'',
  };
  constructor(private productoServices:ProductosService,
    private router:Router,
    private location: Location,
    private activeRoute:ActivatedRoute,
    private loadScripts:LoadScriptsService
    ) {
    loadScripts.loadS(["imgZoom"]);
  }

  ngOnInit(): void {
    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.productoServices.getPro(params.id).subscribe(
          res => {
            console.log(res);
            this.producto = res;
          },
          err => console.log(err)
        )
    }
  }

}
