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

  private store:any;

  @ViewChild('escherContainer') escherContainer;

  public escherBuilder;

  public outputText="Select a segment ...";

  constructor(private state:Store<AppState>) { 
    this.state$ = state.select('state');
  }

  ngOnInit() {
    /* https://stackoverflow.com/questions/37607257/rxjs-get-value-from-observable
      To get data from an observable, you need to subscribe:
      this.singleEvents$.subscribe(event => this.event = event);
      In the template you can directly bind to observables using the | async pipe:
      {{singleEvents$ | async}}
    */
    this.state$.subscribe(store => {
      this.store=store;
      if (store.build) {
        this.build();
      }
      else{
        this.changeColor();
      }
      
    });
  }

  private build() {
    let jsonData=this.store.jsonData;
    if (jsonData===null) return;
    let options: Object = {
      menu: 'zoom',
      fill_screen: false
    }

    this.escherBuilder=Builder(jsonData, null, null, this.escherContainer.nativeElement, options);

    this.escherBuilder.selection.selectAll('.segment')
        .on('click', (data) => {
          const nodes=this.store.jsonData[1].nodes;

          const formatName=(node_id)=>{
            let name=nodes[node_id].name;
            return name?(name + " (nodeID: "+node_id+")"):"nodeID: "+node_id;
          }

          this.outputText= formatName(data.from_node_id) +" => "+ formatName(data.to_node_id);
        });
  }

  private changeColor() {
    let color=this.store.color;
    if (color=='default') color='';

    let paths=document.querySelectorAll('.escher-svg path');
    
    for (let i = 0; i < paths.length; i++) {
      let svgElement = <SVGElement><Element>paths[i];
      svgElement.style.stroke=color;
    }
	}

}
