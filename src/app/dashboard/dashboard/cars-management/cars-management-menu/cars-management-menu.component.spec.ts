import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsManagementMenuComponent } from './cars-management-menu.component';

describe('CarsManagementMenuComponent', () => {
  let component: CarsManagementMenuComponent;
  let fixture: ComponentFixture<CarsManagementMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsManagementMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsManagementMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
