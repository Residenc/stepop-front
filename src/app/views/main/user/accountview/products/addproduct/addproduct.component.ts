import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/Users/users.service';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
public archivos: any =[]
public previsualizacion :string;
  newProduct= new FormGroup({
    nombre: new FormControl('',),
    descripcion: new FormControl('',),
    imagen: new FormControl(''),
    precio: new FormControl(''),
    stock: new FormControl(''),
    tipo: new FormControl('')
    /*password: new FormControl('',),
    username:  new FormControl(''),
    email: new FormControl(''),
    rol: new FormControl('')*/
  });
  constructor(private location: Location,private productService:ProductosService,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  capturarFile(event:any){
    const archivoCapturado =event.target.files[0]
    this.extraerBase64(archivoCapturado).then((imagen:any) =>{
      this.previsualizacion= imagen.base;
      console.log(imagen)
    })
    this.archivos.push(archivoCapturado);
      //console.log(event.target.files)
    }

    
  extraerBase64 = async ($event: any) => new Promise((resolve,reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };

    } catch (e) {
      console.log(e)
    }
  })


  onSubmit(){
    if(this.newProduct.valid){
      //this.loading = true;
      const formularioDeDatos = new FormData();
      this.archivos.forEach((archivo: string | Blob) => {
        formularioDeDatos.append('imagen', archivo)
      })
      this.productService.addProducto(this.newProduct.value).subscribe((res) =>{
      console.log(this.newProduct.value)
      console.log(res);
      console.log('Agregado con exito')
    }
    )}
    else
    {console.log('Not Valid')}
      
    }  

  back(): void {
    this.location.back()
  }
}
