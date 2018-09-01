import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gnls-rec';

  @ViewChild('escherContainer') escherContainer;

  ngAfterViewInit() {
    console.log('only after THIS EVENT "child" is usable!!');
  }

  onFileSelected(file: File): void {
    let stream = new FileReader();

    stream.onload = (e: ProgressEvent) => {
      this.escherContainer.build(JSON.parse(stream.result));
    }

    stream.readAsText(file);
  }
}
