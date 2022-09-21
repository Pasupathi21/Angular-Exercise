import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select} from '@ngrx/store';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit{
  color: any = 'red';
  colorObserval$: Observable<any>;

  constructor(private store: Store<{color: string}>) {
   this.colorObserval$ = this.store.pipe(select('color'));
   }

  ngOnInit(): void {
    this.colorObserval$.subscribe((data) => {
      console.log("Observable: ", data);
      this.color = data.color;
    })
  }

}

