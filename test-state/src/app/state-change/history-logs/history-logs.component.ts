import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store'
import { senderAction, receiverOneAction, receiverTwoAction } from '../state-changes/message.actions'
import { Message} from '../state-changes/message.state'

@Component({
  selector: 'app-history-logs',
  templateUrl: './history-logs.component.html',
  styleUrls: ['./history-logs.component.scss']
})
export class HistoryLogsComponent implements OnInit {

  historyData: Message[] = [];
  constructor(private store: Store<any>) { }

  ngOnInit(): void {

    this.store.pipe(select(`messageInfo`)).subscribe(data => {
      this.historyData.push(data);
      console.log("History Data: ", this.historyData);
      
    })
  }

}
