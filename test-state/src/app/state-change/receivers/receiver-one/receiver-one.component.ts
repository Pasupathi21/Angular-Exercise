import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs"
import { Message } from '../../state-changes/message.state';
import { Store, select } from '@ngrx/store';
import { receiverOneAction, chatHistory} from '../../state-changes/message.actions'

@Component({
  selector: 'app-receiver-one',
  templateUrl: './receiver-one.component.html',
  styleUrls: ['./receiver-one.component.scss']
})
export class ReceiverOneComponent implements OnInit {

  receiverOneObservable$!: Observable<Message>
  receiverOneData!: Message;
  receiverOneMsg!: string;

  constructor(private store: Store<any>) {

  }

  ngOnInit(): void {

    this.store.pipe(select(`messageInfo`)).subscribe(data => {
      this.receiverOneData = data;
    })
  }

  sendMessage(){
    this.store.dispatch(receiverOneAction({message: this.receiverOneMsg, from: 'Receiver One'}));
    this.store.dispatch(chatHistory());
  }

}
