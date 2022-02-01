import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/Users/users.service';
import { Producto, ProductosService } from 'src/app/services/productos/productos.service';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
  ListarProducto: Producto [ ] | any;
  id_producto: any; 
  title = 'fileUpload';
  images: any = [];
  imgURL = '/assets/noimage.png';
  multipleImages = [];
  prueba:any = []
  imagenes: any = [];
  public archivos: any =[]
public previsualizacion :string;
  newProduct= new FormGroup({
    nombre: new FormControl('',),
    descripcion: new FormControl('',),
    imagen: new FormControl(''),
    precio: new FormControl(''),
    stock: new FormControl(''),
    tipo: new FormControl('')

  });
  constructor(private http: HttpClient,private location: Location,private productService:ProductosService,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }
  //@ts-ignore
  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
       reader.readAsDataURL(file);
       reader.onload = (event: any)=>{
         this.imgURL = event.target.result;
       }
      this.images = file;
    }
  }
  //@ts-ignore
  selectMultipleImage(event) {
    if (event.target.files.length > 0) {
      this.multipleImages = event.target.files;
      this.prueba = this.multipleImages
    }
  }

  onSubmit() {
    this.agregar();

   

    this.productService.getUltimo().subscribe(
      res=>{
        const formData = new FormData();
        this.ListarProducto=<any>res;
        for (let x = 0; x < this.prueba.length; x++) {
          formData.append('files', this.prueba[x])
         }
 
      


      console.log(formData)
    
    //formData.append('files', this.prueba);
    

    this.http.post<any>('http://localhost:3000/products/file', formData).subscribe(
      (res) => console.log(res,  Swal.fire({
                icon: 'success',
                title: 'Imagen cargada!!',
                text: 'La imagen se subio correctamente!'
                }).then((result) => {
                            if (result) {
                                       location.reload();
                          }
               }) 
         ),
      (err) => Swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      text: 'Parece que no subio nada!!' 
                    })
    );
  },
  err => console.log(err)
);
   this.imgURL = '/assets/noimage.png';
  
  
  }

  agregar(){
    if(this.newProduct.valid){
      this.productService.addProducto(this.newProduct.value).subscribe((res:any) =>{
      console.log(res);

    })
    }else{console.log('Not Valid')
    }
    }

    lastId(){
      this.productService.getUltimo().subscribe(
        res=>{
          console.log(res);
          this.ListarProducto=<any>res;
          this.id_producto = this.ListarProducto
        },
        err => console.log(err)
      );
    }
  
  mostrarImg(){
    
    this.http.get<any>('http://localhost:3000/products/upload').subscribe(res => {
    
    this.imagenes = res;
    const reader = new FileReader();
    reader.onload = (this.imagenes);
       
   console.log(this.imagenes);
    });

  }
  //@ts-ignore
  deleteImg (id){ 
        
    Swal.fire({
   icon: 'info',
     title: 'Desea eliminar la imagen?',
   showCancelButton: true,
  confirmButtonText: `Eliminar`,
  }).then((result) => {
  if (result.isConfirmed) {
      this.http.delete<any>(`http://localhost:3000/products/delete/${id}`).subscribe( res => {
    
    console.log(res, location.reload());

    });
  }
});
  

  }
    

  back(): void {
    this.location.back()
  }
}

