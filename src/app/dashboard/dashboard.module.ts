import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DashboardSideColumnComponent} from './dashboard/dashboard-side-column/dashboard-side-column.component';
import {UpcomingCarInspectionsModule} from './dashboard/upcoming-car-inspections/upcoming-car-inspections.module';
import {DashboardMainPageComponent} from './dashboard/dashboard-main-page/dashboard-main-page.component';
import {DashboardLogoutComponent} from './dashboard/dashboard-main-page/dashboard-logout/dashboard-logout.component';
import {DashboardSearchModule} from './dashboard/dashboard-search/dashboard-search.module';
import { DashboardFooterComponent } from './dashboard/dashboard-main-page/dashboard-footer/dashboard-footer.component';

@NgModule({
  imports: [
    CommonModule,
    UpcomingCarInspectionsModule,
    DashboardSearchModule
  ],
  declarations: [DashboardComponent, DashboardSideColumnComponent, DashboardMainPageComponent, DashboardLogoutComponent, DashboardFooterComponent]
})
export class DashboardModule {
}
