import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gnls-rec';

  onFileSelected(file: File): void {
    let stream = new FileReader();

    stream.onload = (e: ProgressEvent) => {
      console.log(stream.result);
    }

    stream.readAsText(file);
  }
}
