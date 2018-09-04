import { Component, OnInit, ViewChild } from '@angular/core';
import { Builder } from 'escher-vis';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../store/models/state.model';
import { AppState } from './../app.state';

@Component({
  selector: 'app-escher',
  templateUrl: './escher.component.html',
  styleUrls: ['./escher.component.css']
})
export class EscherComponent implements OnInit {

  state$: Observable<State>;

  @ViewChild('escherContainer') escherContainer;

  public svgPathColor:String='';
  public escherBuilder;

  public outputText="Select a segment ...";

  constructor(private state:Store<AppState>) { 
    this.state$ = state.select('state');
  }

  ngOnInit() {
    this.state$.subscribe(store => this.build(store.jsonData))
  }

  private build(jsonData) {
    console.log('build',jsonData);
    if (jsonData===null) return;
    let options: Object = {
      menu: 'zoom',
      fill_screen: false
    }

    this.escherBuilder=Builder(jsonData, null, null, this.escherContainer.nativeElement, options);

    this.escherBuilder.selection.selectAll('.segment')
        .on('click', (data) => {
          /*
          const nodes=this.dataService.data[1].nodes;

          const formatName=(node_id)=>{
            let name=nodes[node_id].name;
            return name?(name + " (nodeID: "+node_id+")"):"nodeID: "+node_id;
          }

          this.outputText= formatName(data.from_node_id) +" => "+ formatName(data.to_node_id);
          */
        });
  }

}
