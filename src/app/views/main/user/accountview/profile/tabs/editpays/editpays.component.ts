import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/app/services/load-scripts/load-scripts.service';

@Component({
  selector: 'app-editpays',
  templateUrl: './editpays.component.html',
  styleUrls: ['./editpays.component.scss']
})
export class EditpaysComponent implements OnInit {

  constructor(private loadScripts:LoadScriptsService) {
    loadScripts.loadS(["paypal"]);
  }

  ngOnInit(): void {
  }

}
