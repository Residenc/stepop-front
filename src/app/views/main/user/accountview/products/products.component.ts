import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadScriptsService } from 'src/app/services/load-scripts/load-scripts.service';
import { Producto, ProductosService } from 'src/app/services/productos/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  title = 'fileUpload';
  images = '';
  imgURL = '/assets/noimage.png';
  multipleImages = [];
  imagenes: any = [];
 

  constructor(
    private loadScripts:LoadScriptsService, 
    public productoService:ProductosService, 
    private http: HttpClient,
    private router: Router) { 
    loadScripts.loadS(["tooltip"]);
    loadScripts.loadS(["checkdisplay_account"]);
  }

  
 


  ngOnInit(): void {
    this.mostrarImg();
   
  }
  mostrarImg(){
    
    this.http.get<any>('http://localhost:3000/upload').subscribe(res => {
    
    this.imagenes = res;
    const reader = new FileReader();
    reader.onload = (this.imagenes);
       
   console.log(this.imagenes);
    });

  }

  deleteImg (id: any){ 
        
    Swal.fire({
   icon: 'info',
     title: 'Desea eliminar la imagen?',
   showCancelButton: true,
  confirmButtonText: `Eliminar`,
  }).then((result) => {
  if (result.isConfirmed) {
      this.http.delete<any>(`http://localhost:3000/delete/${id}`).subscribe( res => {
    
    console.log(res, location.reload());

    });
  }
});
  

  }


  }
