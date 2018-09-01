import { Component, OnInit, ViewChild } from '@angular/core';
import { Builder } from 'escher-vis';

@Component({
  selector: 'app-escher',
  templateUrl: './escher.component.html',
  styleUrls: ['./escher.component.css']
})
export class EscherComponent implements OnInit {

  @ViewChild('escherContainer') escherContainer;

  constructor() { }

  ngOnInit() {
  }

  build(jsonData) {
    let options: Object = {
      menu: 'zoom',
      fill_screen: true
    }

    Builder(jsonData, null, null, this.escherContainer.nativeElement, options);
  }

}
