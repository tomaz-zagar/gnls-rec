import { Component, OnInit, ViewChild } from '@angular/core';
import { Builder } from 'escher-vis';

import { Observable } from 'rxjs';
import { Store, ActionsSubject } from '@ngrx/store';
import { State } from '../store/models/state.model';
import { AppState } from './../app.state';

import * as StateActions from '../store/actions/state.actions';

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

  constructor(private state:Store<AppState>, private dispatcher: ActionsSubject) { 
    this.state$ = state.select('state');
  }

  ngOnInit() {
    /* https://stackoverflow.com/questions/37607257/rxjs-get-value-from-observable
      To get data from an observable, you need to subscribe:
      this.singleEvents$.subscribe(event => this.event = event);
      In the template you can directly bind to observables using the | async pipe:
      {{singleEvents$ | async}}
    */
    this.state$.subscribe(store => this.store=store);

    //https://stackoverflow.com/questions/43226681/how-to-subscribe-to-action-success-callback-using-ngrx-and-effects
    this.dispatcher.subscribe(data => { 
      if(data.type === StateActions.CHANGE_COLOR) {
        this.changeColor();
      }
      else if (data.type === StateActions.DATA_UPLOADED){
        this.build();
      }
    });
  }

  private build() {
    let jsonData=this.store.jsonData;
    if (jsonData===null) return;
    console.log(jsonData)
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

          this.state.dispatch(new StateActions.PathClicked(formatName(data.from_node_id) +" => "+ formatName(data.to_node_id)));
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
