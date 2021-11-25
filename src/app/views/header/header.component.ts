import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  auth:boolean;
  constructor(private authService: AuthenticationService,private router : Router) { }

  ngOnInit(): void {
    this.isAuth();
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
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    });
    Toast.fire({
      title: 'Adios, NOMBRE'
    });
  }
}
