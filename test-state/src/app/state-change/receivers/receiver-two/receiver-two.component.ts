import { Component, OnInit } from '@angular/core';
import { Message } from '../../state-changes/message.state';
import { Store, select } from '@ngrx/store';
import { Observable } from "rxjs"
import { chatHistory, receiverTwoAction } from '../../state-changes/message.actions';
@Component({
  selector: 'app-receiver-two',
  templateUrl: './receiver-two.component.html',
  styleUrls: ['./receiver-two.component.scss']
})
export class ReceiverTwoComponent implements OnInit {

  receiverTwoObservable$!: Observable<Message>;
  receiverTwoData!: Message;
  receiverTwoMsg!: string;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.pipe(select(`messageInfo`)).subscribe(data => {
      this.receiverTwoData = data;
    });
  }

  sendMessage(){
    this.store.dispatch(receiverTwoAction({message: this.receiverTwoMsg, from: 'Receiver Twe'}));
    this.store.dispatch(chatHistory());
  }

}
