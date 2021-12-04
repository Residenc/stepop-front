import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdressService, Colonia, Estado } from 'src/app/services/address/adress.service';
import { UsersService } from 'src/app/services/Users/users.service';

@Component({
  selector: 'app-registerview',
  templateUrl: './registerview.component.html',
  styleUrls: ['./registerview.component.scss']
})
export class RegisterviewComponent implements OnInit {
  ListarEstado: Estado[] | Array<any>;
  ListarColonia: Colonia[] | Array<any>;


  newUser= new FormGroup({
    nombre_usuario: new FormControl('',),
    apellidos: new FormControl('',),
    telefono: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    calle: new FormControl(''),
    entre_calle:new FormControl(''),
    y_calle:new FormControl(''),
    no_interior:new FormControl(''),
    no_exterior:new FormControl(''),

  });

  constructor(private userService:UsersService,private router:Router, private addressService:AdressService) { }

  ngOnInit(): void {
    this.listarEstado();
    this.listarColonias();
  }
  onSubmit(){
    if(this.newUser.valid){
      this.userService.register(this.newUser.value).subscribe((res:any) =>{
        console.log('Usuario agregado correctamente')
      this.router.navigate(['main'])
    })
    }
    else{console.log('No es valido')}
   
    
  }

  listarEstado()
  {
    this.addressService.getEstados().subscribe(
      res=>{
        console.log(res);
        this.ListarEstado=<any>res;
      },
      err => console.log(err)
    );
  }

  listarColonias()
  {
    this.addressService.getColonias().subscribe(
      res=>{
        console.log(res);
        this.ListarColonia=<any>res;
      },
      err => console.log(err)
    );
  }
}
