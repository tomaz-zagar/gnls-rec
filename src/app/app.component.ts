import { Component, ViewChild, ElementRef } from '@angular/core';
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

  //https://stackoverflow.com/questions/39908967/how-to-get-reference-of-the-component-associated-with-elementref-in-angular-2
  @ViewChild('colorToggler', {read: ElementRef}) colorToggler: ElementRef;

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

  changeColor(e) {
    this.state.dispatch(new StateActions.ChangeColor(this.colorToggler.nativeElement.getAttribute('data-color')));
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
