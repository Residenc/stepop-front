import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/app/services/load-scripts/load-scripts.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {

  constructor(private loadScripts:LoadScriptsService) {
    loadScripts.loadS(["imgZoom"]);
  }

  ngOnInit(): void {
  }

}
