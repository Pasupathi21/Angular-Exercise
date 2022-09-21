import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ActionComponent } from './action-color/action/action.component';
import { ColorComponent } from './action-color/color/color.component';
import { StoreModule } from '@ngrx/store';
import { callReducer } from './action-color/state/color.reduce';

@NgModule({
  declarations: [
    AppComponent,
    ActionComponent,
    ColorComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({color: callReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
