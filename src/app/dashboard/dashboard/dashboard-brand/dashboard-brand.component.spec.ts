import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBrandComponent } from './dashboard-brand.component';

describe('DashboardBrandComponent', () => {
  let component: DashboardBrandComponent;
  let fixture: ComponentFixture<DashboardBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
