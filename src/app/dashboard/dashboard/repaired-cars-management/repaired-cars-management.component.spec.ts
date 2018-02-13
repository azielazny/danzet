import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairedCarsManagementComponent } from './repaired-cars-management.component';

describe('RepairedCarsManagementComponent', () => {
  let component: RepairedCarsManagementComponent;
  let fixture: ComponentFixture<RepairedCarsManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairedCarsManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairedCarsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
