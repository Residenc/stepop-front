import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
id=4;

  constructor(private router:Router) {

  }

  ngOnInit(): void {
  }
  view(){
    let id = localStorage.getItem('view');
    console.log('Este es el Id', id)
    this.router.navigate(['accountview/profile/editprofile',id])
  }



}
