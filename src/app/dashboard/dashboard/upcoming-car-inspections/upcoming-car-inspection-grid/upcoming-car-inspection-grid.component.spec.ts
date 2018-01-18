import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingCarInspectionGridComponent } from './upcoming-car-inspection-grid.component';

describe('UpcomingCarInspectionGridComponent', () => {
  let component: UpcomingCarInspectionGridComponent;
  let fixture: ComponentFixture<UpcomingCarInspectionGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingCarInspectionGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingCarInspectionGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
