import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarsClientSearchComponent } from './add-cars-client-search.component';

describe('AddCarsClientSearchComponent', () => {
  let component: AddCarsClientSearchComponent;
  let fixture: ComponentFixture<AddCarsClientSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCarsClientSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCarsClientSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
