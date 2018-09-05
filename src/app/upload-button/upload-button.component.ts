import { Component, OnInit, Input } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from './../app.state';

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

  ngOnInit() {
  }

}
