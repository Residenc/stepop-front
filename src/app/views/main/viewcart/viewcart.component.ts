import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/app/services/load-scripts/load-scripts.service';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.scss']
})
export class ViewcartComponent implements OnInit {

  constructor(private loadScripts:LoadScriptsService) {
    loadScripts.loadS(["scrollAOS"])
  }

  ngOnInit(): void {
  }

}
