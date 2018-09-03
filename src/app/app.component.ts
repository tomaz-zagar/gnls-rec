import { Component, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import { DataService } from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gnls-rec';

  @ViewChild('escherContainer') escherContainer;
  @ViewChild('colorToggler') colorToggler;

  constructor(private dataService: DataService) {}

  ngAfterViewInit() {
    //only after THIS EVENT "child" is usable!!
    d3.json('./assets/e_coli_core.Core metabolism.json')
      .then((data) => {
        this.dataService.data=data;
      })
      .catch((err) => {
        // Handle err
      });
  }

  changeColor(e) {
    let paths=document.querySelectorAll('.escher-svg path');
    
    let color='';
    
    if (this.escherContainer.svgPathColor=='') {
      color=this.colorToggler.nativeElement.getAttribute('data-color');
    } 

    for (let i = 0; i < paths.length; i++) {
      let svgElement = <SVGElement><Element>paths[i];
      svgElement.style.stroke=color;
    }
    
    this.escherContainer.svgPathColor=color;
	}

  onFileSelected(file: File): void {
    let stream = new FileReader();

    stream.onload = (e: ProgressEvent) => {
      this.dataService.data=JSON.parse(stream.result);
    }

    stream.readAsText(file);
  }
}
