import { Component, OnInit, Input } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import * as StateActions from '../store/actions/state.actions';

@Component({
  selector: 'app-upload-button',
  templateUrl: './upload-button.component.html',
  styleUrls: ['./upload-button.component.css']
})
export class UploadButtonComponent implements OnInit {

  @Input() acceptedFileTypes: string;

  constructor(private state: Store<AppState>) { 
    this.acceptedFileTypes = '*';
  }

  _onChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0){
      let file: File = fileList[0];
      this.state.dispatch(new StateActions.FileSelected(file));
    }
  }

  ngOnInit() {
  }

}
