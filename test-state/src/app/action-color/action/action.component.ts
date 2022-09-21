import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeColor } from '../state/color.actions'
@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  constructor(private store: Store<{ color: string}>) { }

  ngOnInit(): void {
  }

  triggerChange(){
    this.store.dispatch(changeColor())
  }

}
