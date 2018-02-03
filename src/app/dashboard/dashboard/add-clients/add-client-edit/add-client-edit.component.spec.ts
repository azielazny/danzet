import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientEditComponent } from './add-client-edit.component';

describe('AddClientEditComponent', () => {
  let component: AddClientEditComponent;
  let fixture: ComponentFixture<AddClientEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClientEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClientEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
