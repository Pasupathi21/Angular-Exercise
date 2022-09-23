import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { filter,map} from 'rxjs/operators'
import { ObserveDataService } from '../observe-data.service';

@Component({
  selector: 'app-observe',
  templateUrl: './observe.component.html',
  styleUrls: ['./observe.component.scss']
})
export class ObserveComponent implements OnInit {

  // Non-null assersotion
  dataObserver$! : Observable<any>
  constructor(private obsServices: ObserveDataService) { 
  }

  ngOnInit(): void {

    this.dataObserver$ = this.obsServices.getAllData()
    this.dataObserver$.pipe(map(value => {
      console.log(value)
    }))
  }

}
 