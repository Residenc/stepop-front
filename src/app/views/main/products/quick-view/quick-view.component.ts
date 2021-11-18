import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/app/services/load-scripts/load-scripts.service';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent implements OnInit {

  constructor(private loadScripts:LoadScriptsService) {
    loadScripts.loadS(["imgZoom"]);
  }

  ngOnInit(): void {
  }

}
