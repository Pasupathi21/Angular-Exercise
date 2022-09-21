import { Component, OnInit } from '@angular/core';
import { Store, select} from '@ngrx/store';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {
  color: string = '';
  colorObserval$: Observable<any>;
  constructor(private store: Store<{color: string}>) {
   this.colorObserval$ = this.store.pipe(select('color'))
   }

  ngOnInit(): void {
    console.log("Observable: ", this.colorObserval$);
    
    this.color = "red";
  }

}
