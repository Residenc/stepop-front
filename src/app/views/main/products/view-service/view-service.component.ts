import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/app/services/load-scripts/load-scripts.service';

@Component({
  selector: 'app-view-service',
  templateUrl: './view-service.component.html',
  styleUrls: ['./view-service.component.scss']
})
export class ViewServiceComponent implements OnInit {

  constructor(private loadScript:LoadScriptsService) {
  loadScript.loadS(["imgZoom"]);
  }

  ngOnInit(): void {
  }

}
