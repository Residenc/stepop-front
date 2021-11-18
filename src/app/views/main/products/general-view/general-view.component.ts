import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/app/services/load-scripts/load-scripts.service';
@Component({
  selector: 'app-general-view',
  templateUrl: './general-view.component.html',
  styleUrls: ['./general-view.component.scss']
})
export class GeneralViewComponent implements OnInit {

  constructor(private loadScripts:LoadScriptsService) { 
    loadScripts.loadS(["moretext"]);
  }

  ngOnInit(): void {
  }

}
