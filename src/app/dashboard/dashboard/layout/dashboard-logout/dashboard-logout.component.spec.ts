import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLogoutComponent } from './dashboard-logout.component';

describe('DashboardLogoutComponent', () => {
  let component: DashboardLogoutComponent;
  let fixture: ComponentFixture<DashboardLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
