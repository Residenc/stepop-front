import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User, UsersService } from 'src/app/services/Users/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ListarUsuario: User[] | any;
  usuario: User={
    id_usuario:(''),
    nombre_usuario:'',
    apellidos:'',
    email:'',
  };
  constructor(private userService:UsersService,
    private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.userService.getUsuario(params.id).subscribe(
          res => {
            console.log(res);
            this.usuario = res;
          },
          err => console.log(err)
        )
    }
  }

}
