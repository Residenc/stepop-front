import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlDirective, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
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

  private telephonePattern:any=/[0-9\+\-\ ]/;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  

  newUser= new FormGroup({
    nombre_usuario: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(25), Validators.pattern('[a-zA-Z ]*') ]),
    apellidos: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(30),Validators.pattern('[a-zA-Z ]*')]),
    telefono: new FormControl('',[Validators.required, Validators.pattern(this.telephonePattern)]),
    email: new FormControl('',[Validators.required,Validators.pattern(this.emailPattern)]),
    password: new FormControl('',[Validators.required, Validators.minLength(7)]),
    confirmpassword: new FormControl('',[Validators.required]),
    calle: new FormControl('',[Validators.required, Validators.maxLength(25)]),
    entre_calle:new FormControl('',[Validators.required, Validators.maxLength(35)]),
    y_calle:new FormControl('',[Validators.required,Validators.maxLength(35)]),
    no_exterior:new FormControl('',[Validators.required, Validators.maxLength(8)]),
    no_interior:new FormControl('s/n',[Validators.required, Validators.maxLength(8)]),

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
