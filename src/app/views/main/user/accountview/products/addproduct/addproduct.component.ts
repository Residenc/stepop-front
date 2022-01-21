import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/Users/users.service';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
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
    /*password: new FormControl('',),
    username:  new FormControl(''),
    email: new FormControl(''),
    rol: new FormControl('')*/
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
    const formData = new FormData();
    //formData.append('files', this.prueba);
    for (let x = 0; x < this.prueba.length; x++) {
     formData.append('files', this.prueba[x])
    }
   
    this.http.post<any>('http://localhost:3000/file', formData).subscribe(
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
   this.imgURL = '/assets/noimage.png';
  
  
  }

  
  mostrarImg(){
    
    this.http.get<any>('http://localhost:3000/upload').subscribe(res => {
    
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
      this.http.delete<any>(`http://localhost:3000/delete/${id}`).subscribe( res => {
    
    console.log(res, location.reload());

    });
  }
});
  

  }
    

  back(): void {
    this.location.back()
  }
}

