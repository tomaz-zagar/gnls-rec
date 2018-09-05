import { Component, ViewChild } from '@angular/core';
import * as d3 from 'd3';

import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { Observable } from 'rxjs';
import { State } from './store/models/state.model';
import * as StateActions from './store/actions/state.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gnls-rec';

  @ViewChild('colorToggler') colorToggler;

  state$: Observable<State>

  constructor(private state: Store<AppState>) {
    this.state$ = state.select('state');
  }

  ngAfterViewInit() {
    //only after THIS EVENT "child" is usable!!
    d3.json('./assets/e_coli_core.Core metabolism.json')
      .then((data) => {
        this.state.dispatch(new StateActions.DataUploaded(data));
      })
      .catch((err) => {
        // Handle err
      });
  }

  onChangeColor() {
    this.state.dispatch(new StateActions.ChangeColor(this.colorToggler.colorToToggle));
	}

  onFileSelected(event): void {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0){
      let file: File = fileList[0];
      let stream = new FileReader();

      stream.onload = (e: ProgressEvent) => {
        this.state.dispatch(new StateActions.DataUploaded(JSON.parse(stream.result)));
      }

      stream.readAsText(file);  
    }
  }
}
