import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { LoadScriptsService } from 'src/app/services/load-scripts/load-scripts.service';

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

  constructor(private renderer2:Renderer2, private loadScripts:LoadScriptsService) {
    loadScripts.loadS(["tooltip"]);
  }

  ngOnInit(): void {
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
