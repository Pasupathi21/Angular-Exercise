import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs"
import { Message } from '../../state-changes/message.state';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-receiver-one',
  templateUrl: './receiver-one.component.html',
  styleUrls: ['./receiver-one.component.scss']
})
export class ReceiverOneComponent implements OnInit {

  receiverOneObservable$!: Observable<Message>
  receiverOneData!: Message;

  constructor(private store: Store<any>) {

  }

  ngOnInit(): void {

    this.store.pipe(select(`messageInfo`)).subscribe(data => {
      console.log("R1", data)
      this.receiverOneData = data;
    })
  }

}
