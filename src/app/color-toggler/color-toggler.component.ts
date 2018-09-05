import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../store/models/state.model';
import { AppState } from './../app.state';

@Component({
  selector: 'app-color-toggler',
  templateUrl: './color-toggler.component.html',
  styleUrls: ['./color-toggler.component.css']
})
export class ColorTogglerComponent implements OnInit {

  @Input() colorToToggle: string;

  state$: Observable<State>;

  constructor(private state:Store<AppState>) { 
    this.state$ = state.select('state');
  }

  ngOnInit() {
  }

}
