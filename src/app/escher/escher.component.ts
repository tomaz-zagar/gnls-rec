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

  private jsonData;

  public outputText="Select a segment ...";

  constructor() { }

  ngOnInit() {
  }

  build(jsonData) {
    let options: Object = {
      menu: 'zoom',
      fill_screen: false
    }

    this.jsonData=jsonData;

    this.escherBuilder=Builder(jsonData, null, null, this.escherContainer.nativeElement, options);
    console.log(this.jsonData)
    var self=this;
    this.escherBuilder.selection.selectAll('.segment')
        .on('click', (data) => {
          const nodes=this.jsonData[1].nodes;

          const formatName=(node_id)=>{
            let name=nodes[node_id].name;
            return name?(name + " (nodeID: "+node_id+")"):"nodeID: "+node_id;
          }

          self.outputText= formatName(data.from_node_id) +" => "+ formatName(data.to_node_id);
        });
  }

}
