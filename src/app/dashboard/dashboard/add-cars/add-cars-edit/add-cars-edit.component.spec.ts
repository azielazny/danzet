import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarsEditComponent } from './add-cars-edit.component';

describe('AddCarsEditComponent', () => {
  let component: AddCarsEditComponent;
  let fixture: ComponentFixture<AddCarsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCarsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCarsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
