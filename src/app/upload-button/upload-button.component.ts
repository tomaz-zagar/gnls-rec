import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload-button',
  templateUrl: './upload-button.component.html',
  styleUrls: ['./upload-button.component.css']
})
export class UploadButtonComponent implements OnInit {

  @Input() acceptedFileTypes: string;
  @Output() onChange = new EventEmitter<File>();

  constructor() { 
    this.acceptedFileTypes = '*';
  }

  _onChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0){
      let file: File = fileList[0];
      this.onChange.emit(file);
    }
  }

  ngOnInit() {
  }

}
