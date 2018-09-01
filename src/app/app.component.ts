import { Component, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gnls-rec';

  @ViewChild('escherContainer') escherContainer;

  ngAfterViewInit() {
    //only after THIS EVENT "child" is usable!!
    d3.json('./assets/e_coli_core.Core metabolism.json')
      .then((data) => {
        this.escherContainer.build(data);
      })
      .catch((err) => {
        // Handle err
      });
  }

  changeColor(e) {
    let paths=document.querySelectorAll('.escher-svg path');
    for (let i = 0; i < paths.length; i++) {
      paths[i].style.stroke='#00ff00';
    }
	}

  onFileSelected(file: File): void {
    let stream = new FileReader();

    stream.onload = (e: ProgressEvent) => {
      this.escherContainer.build(JSON.parse(stream.result));
    }

    stream.readAsText(file);
  }
}
