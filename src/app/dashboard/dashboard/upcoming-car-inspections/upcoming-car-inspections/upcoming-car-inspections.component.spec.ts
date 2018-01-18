import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingCarInspectionsComponent } from './upcoming-car-inspections.component';

describe('UpcomingCarInspectionsComponent', () => {
  let component: UpcomingCarInspectionsComponent;
  let fixture: ComponentFixture<UpcomingCarInspectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingCarInspectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingCarInspectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
