import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { User, UsersService } from 'src/app/services/Users/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  auth:boolean;


  usuario: User={
    id_usuario:(''),
    nombre_usuario:'',
    apellidos:'',
    email:'',
  };
  ListarUsuario: User[] | any;
  constructor(private authService: AuthenticationService,private router : Router,
    private activeRoute: ActivatedRoute, private userService: UsersService) {}



  ngOnInit(): void {
    this.isAuth();
 
  }

  view(){
    let id = localStorage.getItem('view');
    console.log('Este es el Id', id)
    this.router.navigate(['/accountview/home',id])
  }

  isAuth(){
    if(localStorage.getItem('token')){
      this.auth=true;
    }else{
      this.auth=false;
    }
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['main'])
  }
  }
