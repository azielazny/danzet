import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarsEdit2Component } from './add-cars-edit2.component';

describe('AddCarsEdit2Component', () => {
  let component: AddCarsEdit2Component;
  let fixture: ComponentFixture<AddCarsEdit2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCarsEdit2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCarsEdit2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
