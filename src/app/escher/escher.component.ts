import { Component, OnInit, ViewChild } from '@angular/core';
import { Builder } from 'escher-vis';

@Component({
  selector: 'app-escher',
  templateUrl: './escher.component.html',
  styleUrls: ['./escher.component.css']
})
export class EscherComponent implements OnInit {

  @ViewChild('escherContainer') escherContainer;

  public svgPathColor:String='';

  constructor() { }

  ngOnInit() {
  }

  build(jsonData) {
    let options: Object = {
      menu: 'zoom',
      fill_screen: false
    }

    Builder(jsonData, null, null, this.escherContainer.nativeElement, options);
  }

}
