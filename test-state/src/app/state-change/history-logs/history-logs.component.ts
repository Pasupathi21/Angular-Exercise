import { Component, OnInit, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store'
import { senderAction, receiverOneAction, receiverTwoAction } from '../state-changes/message.actions'
import { Message} from '../state-changes/message.state'
import { messageHistory } from '../state-changes/message.selectors'
@Component({
  selector: 'app-history-logs',
  templateUrl: './history-logs.component.html',
  styleUrls: ['./history-logs.component.scss']
})
export class HistoryLogsComponent implements OnInit, OnDestroy {

  historyData: Message[] = [];
  constructor(private store: Store<any>) { }

  ngOnInit(): void {

    this.store.pipe(select(messageHistory)).subscribe(data => {
      const history: Message[] = []
      let position = data.length - 1;
      data.map((item) => {
        if(position >= 0){
          history.push(data[position])
          position--
        }
      })
      this.historyData = history;
      
    })
  }

  ngOnDestroy(): void {
  }

}
