import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/Users/users.service';

@Component({
  selector: 'app-registerview',
  templateUrl: './registerview.component.html',
  styleUrls: ['./registerview.component.scss']
})
export class RegisterviewComponent implements OnInit {
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

  constructor(private userService:UsersService,private router:Router) { }

  ngOnInit(): void {
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
}
