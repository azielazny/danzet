import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientCarListComponent } from './add-client-car-list.component';

describe('AddClientCarListComponent', () => {
  let component: AddClientCarListComponent;
  let fixture: ComponentFixture<AddClientCarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClientCarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClientCarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
