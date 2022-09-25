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
import { NgParentComponent } from './ng-dom/ng-parent/ng-parent.component';
import { NgChildComponent } from './ng-dom/ng-child/ng-child.component';
import { SenderComponent } from './state-change/sender/sender.component';
import { ReceiverOneComponent } from './state-change/receivers/receiver-one/receiver-one.component';
import { ReceiverTwoComponent } from './state-change/receivers/receiver-two/receiver-two.component';
import { HistoryLogsComponent } from './state-change/history-logs/history-logs.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionComponent,
    ColorComponent,
    ObserveComponent,
    NgParentComponent,
    NgChildComponent,
    SenderComponent,
    ReceiverOneComponent,
    ReceiverTwoComponent,
    HistoryLogsComponent
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
