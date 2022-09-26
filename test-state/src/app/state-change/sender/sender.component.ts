import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { senderAction, historyActionFromSender } from "../state-changes/message.actions"
import { Message } from '../state-changes/message.state';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss']
})
export class SenderComponent implements OnInit {

  viewHistory:boolean = false;
  msg!: string;
  historyData: Message[] = [];

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.pipe(select(`messageInfo`)).subscribe(data => {
      console.log("Sender Data", data);
      
      this.historyData.push(data);
    })
  }

  sendMessage(){
    this.store.dispatch(senderAction({message: this.msg, from: 'Sender'}))
  }

  showHistory(){
    this.viewHistory = !this.viewHistory
    this.store.dispatch(historyActionFromSender(this.historyData));
  }

}
