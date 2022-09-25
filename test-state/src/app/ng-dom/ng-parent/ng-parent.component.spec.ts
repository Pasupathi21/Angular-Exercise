import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgParentComponent } from './ng-parent.component';

describe('NgParentComponent', () => {
  let component: NgParentComponent;
  let fixture: ComponentFixture<NgParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
