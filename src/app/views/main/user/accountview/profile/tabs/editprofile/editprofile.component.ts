import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadScriptsService } from 'src/app/services/load-scripts/load-scripts.service';
import { User, UsersService } from 'src/app/services/Users/users.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {
    //variables disables
    @ViewChild('editName') botonName: ElementRef;
    @ViewChild('editEmail') botonEmail: ElementRef;
    @ViewChild('editPasswd1') botonPasswd1: ElementRef;
    @ViewChild('editPasswd2') botonPasswd2: ElementRef;
    @ViewChild('editPhone') botonPhone: ElementRef;
    @ViewChild('editButton') botonEdit: ElementRef;

    usuario: User={
      id_usuario:(''),
      nombre_usuario:'',
      apellidos:'',
      email:'',
      password:''
    };
  constructor(private renderer2:Renderer2, private loadScripts:LoadScriptsService,
              private userService:UsersService,private router:Router,
              private activeRoute:ActivatedRoute) {
    loadScripts.loadS(["tooltip"]);
  }

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

  modificar()
  {
      this.userService.editUser(this.usuario.id_usuario, this.usuario).subscribe(
      res=>{
        console.log(res);
      },
      err=>{console.log(err)
      }
    );

    this.router.navigate(['main']);
  }

  enabledBtn(){
    this.renderer2.removeAttribute(this.botonName.nativeElement, 'disabled');
    this.renderer2.removeAttribute(this.botonEmail.nativeElement, 'disabled');
    this.renderer2.removeAttribute(this.botonPasswd1.nativeElement, 'disabled');
    this.renderer2.removeAttribute(this.botonPasswd2.nativeElement, 'disabled');
    this.renderer2.removeAttribute(this.botonPhone.nativeElement, 'disabled');
    this.renderer2.removeAttribute(this.botonEdit.nativeElement, 'disabled');
  }

  disabledBtn(){
    this.renderer2.setAttribute(this.botonName.nativeElement, 'disabled', 'true');
    this.renderer2.setAttribute(this.botonEmail.nativeElement, 'disabled', 'true');
    this.renderer2.setAttribute(this.botonPasswd1.nativeElement, 'disabled', 'true');
    this.renderer2.setAttribute(this.botonPasswd2.nativeElement, 'disabled', 'true');
    this.renderer2.setAttribute(this.botonPhone.nativeElement, 'disabled', 'true');
    this.renderer2.setAttribute(this.botonEdit.nativeElement, 'disabled', 'true');
  }
}
