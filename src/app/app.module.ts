import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { stateReducer } from './store/reducers/state.reducer';

import { AppComponent } from './app.component';
import { UploadButtonComponent } from './upload-button/upload-button.component';
import { EscherComponent } from './escher/escher.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ColorTogglerComponent } from './color-toggler/color-toggler.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadButtonComponent,
    EscherComponent,
    StatisticsComponent,
    ColorTogglerComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    StoreModule.forRoot({
      state: stateReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
