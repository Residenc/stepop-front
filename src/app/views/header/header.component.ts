import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

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
    this.router.navigate(['main'])
    
  }
}
