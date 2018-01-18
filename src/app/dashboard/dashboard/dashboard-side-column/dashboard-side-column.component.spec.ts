import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSideColumnComponent } from './dashboard-side-column.component';

describe('DashboardSideColumnComponent', () => {
  let component: DashboardSideColumnComponent;
  let fixture: ComponentFixture<DashboardSideColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSideColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSideColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
