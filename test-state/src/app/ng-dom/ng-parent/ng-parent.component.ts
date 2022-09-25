import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-parent',
  templateUrl: './ng-parent.component.html',
  styleUrls: ['./ng-parent.component.scss']
})
export class NgParentComponent implements OnInit {

  displayTable: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
