import { Component, OnInit } from '@angular/core';
import { Message } from '../../state-changes/message.state';
import { Store, select } from '@ngrx/store';
import { Observable } from "rxjs"
@Component({
  selector: 'app-receiver-two',
  templateUrl: './receiver-two.component.html',
  styleUrls: ['./receiver-two.component.scss']
})
export class ReceiverTwoComponent implements OnInit {

  receiverTwoObservable$!: Observable<Message>;
  receiverTwoData!: Message;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.pipe(select(`messageInfo`)).subscribe(data => {
      console.log("R2", data)
      this.receiverTwoData = data;
    });
  }

}
