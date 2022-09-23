import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ActionComponent } from './action-color/action/action.component';
import { ColorComponent } from './action-color/color/color.component';
import { StoreModule } from '@ngrx/store';
import { callReducer } from './action-color/state/color.reduce';
import { ObserveComponent } from './observables/observe/observe.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ActionComponent,
    ColorComponent,
    ObserveComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({color: callReducer}),
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
