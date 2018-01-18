import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingCarInspectionTileComponent } from './upcoming-car-inspection-tile.component';

describe('UpcomingCarInspectionTileComponent', () => {
  let component: UpcomingCarInspectionTileComponent;
  let fixture: ComponentFixture<UpcomingCarInspectionTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingCarInspectionTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingCarInspectionTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
