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
  public escherBuilder;

  public outputText="napis";

  constructor() { }

  ngOnInit() {
  }

  build(jsonData) {
    let options: Object = {
      menu: 'zoom',
      fill_screen: false
    }

    this.escherBuilder=Builder(jsonData, null, null, this.escherContainer.nativeElement, options);
    var self=this;
    this.escherBuilder.selection.selectAll('.segment')
        .on('click', (data) => {
          self.outputText=data.from_node_id+" => "+data.to_node_id;
            console.log('onclick',data)
        });
  }

}
