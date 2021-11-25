import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UsersService } from 'src/app/services/Users/users.service';
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
  constructor(private authService:AuthenticationService,private router:Router,
    private userService:UsersService, private activeRoute :ActivatedRoute) { }

  ngOnInit(): void {
   
  }

  onSubmit() { 
    try{
      this.authService.signIn(this.authForm.value).subscribe((res:any)=> {
        localStorage.setItem('token',res.token);
        console.log(this.authForm.value)
        //this.router.navigate(['accountview/home']);
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
      this.userService.register(this.registerForm.value).subscribe((res:any) =>{
      console.log(res);
      this.router.navigate(['registerview'])
    })
    }else{console.log('Not Valid')
  
    }
  }
}
