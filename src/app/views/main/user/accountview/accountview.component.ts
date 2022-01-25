import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-accountview',
  templateUrl: './accountview.component.html',
  styleUrls: ['./accountview.component.scss']
})

export class AccountviewComponent implements OnInit {
  id= 4;
  constructor(private router : Router) {
  }

  ngOnInit(): void {

  }

  view(){
    let id = localStorage.getItem('view');
    console.log('Este es el Id', id)
    this.router.navigate(['accountview/profile/editprofile',id])
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
