import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ActionComponent } from './action-color/action/action.component';
import { ColorComponent } from './action-color/color/color.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionComponent,
    ColorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
