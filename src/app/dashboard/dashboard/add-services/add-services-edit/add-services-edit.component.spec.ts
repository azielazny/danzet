import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServicesEditComponent } from './add-services-edit.component';

describe('AddServicesEditComponent', () => {
  let component: AddServicesEditComponent;
  let fixture: ComponentFixture<AddServicesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddServicesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServicesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
