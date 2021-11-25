import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/app/services/load-scripts/load-scripts.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  constructor(private loadScripts:LoadScriptsService) { 
    loadScripts.loadS(["scrollAOS"]);
  }

  ngOnInit(): void {
  }

}
