import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/Users/users.service';
import {AuthenticationService} from '../../../../../services/authentication/authentication.service'
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  authForm= new FormGroup({
    email: new FormControl('' ,[Validators.required]),
    password: new FormControl('',[Validators.required,Validators.minLength(7)])
  });
  constructor(private authService:AuthenticationService,private router:Router,private regService:UsersService) { }

  ngOnInit(): void {
  }

  onSubmit() { 
    try{
      this.authService.signIn(this.authForm.value).subscribe((res:any)=> {
        localStorage.setItem('token',res.token);
        this.router.navigate(['accountview','home']); 
      },(err) =>
      console.log('Ocurrio un error'+err))
    }catch(error){
      console.log(error)
    }
  };  

  registerForm= new FormGroup({
    nombre: new FormControl('',[Validators.required]),
    apellidos: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
  });

  onRegister(){
    console.log(this.registerForm.value)
    if(this.registerForm.valid){
      this.regService.register(this.registerForm.value).subscribe((res:any) =>{
      console.log(res);
      this.router.navigate(['registerview'])
    })
    }else{console.log('Not Valid')
  
    }
  }
}
