import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UploadButtonComponent } from './upload-button/upload-button.component';
import { EscherComponent } from './escher/escher.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadButtonComponent,
    EscherComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
