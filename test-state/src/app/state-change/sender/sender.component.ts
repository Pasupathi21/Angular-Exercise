import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { senderAction } from "../state-changes/message.actions"

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss']
})
export class SenderComponent implements OnInit {

  viewHistory:boolean = false;
  msg!: string;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
  }

  sendMessage(){
    this.store.dispatch(senderAction({message: this.msg, from: 'Sender'}))
  }

  showHistory(){
    this.viewHistory = !this.viewHistory
  }

}
