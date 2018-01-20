import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UpcomingCarInspectionsModule} from './dashboard/upcoming-car-inspections/upcoming-car-inspections.module';
import {DashboardLogoutComponent} from './dashboard/dashboard-logout/dashboard-logout.component';
import {DashboardSearchModule} from './dashboard/dashboard-search/dashboard-search.module';
import {DashboardFooterComponent} from './dashboard/dashboard-footer/dashboard-footer.component';
import {DashboardLayoutComponent} from './dashboard-layout/dashboard-layout.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import { DashboardBrandComponent } from './dashboard/dashboard-brand/dashboard-brand.component';

@NgModule({
  imports: [
    CommonModule,
    UpcomingCarInspectionsModule,
    DashboardSearchModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent, DashboardLogoutComponent, DashboardFooterComponent, DashboardLayoutComponent, DashboardBrandComponent]
})
export class DashboardModule {
}
