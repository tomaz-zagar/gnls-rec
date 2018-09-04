import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { stateReducer } from './store/reducers/state.reducer';

import { AppComponent } from './app.component';
import { UploadButtonComponent } from './upload-button/upload-button.component';
import { EscherComponent } from './escher/escher.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadButtonComponent,
    EscherComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      state: stateReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
