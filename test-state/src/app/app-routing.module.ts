import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ObserveComponent } from './observables/observe/observe.component';
import { NgParentComponent } from './ng-dom/ng-parent/ng-parent.component';
import { SenderComponent } from './state-change/sender/sender.component';


const  routes: Routes = [
  {path: 'observe-data', component: ObserveComponent, pathMatch: 'full'},
  {path: 'ng-dom', component: NgParentComponent},
  {path: 'messages', component: SenderComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
