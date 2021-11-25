import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from './services/load-scripts/load-scripts.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private loadScripts:LoadScriptsService) {
    loadScripts.loadS(["scrollAOS"]);
  }
  ngOnInit(): void {
  }
  title = 'Frontend';
}
