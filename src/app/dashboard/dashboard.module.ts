import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DashboardSideColumnComponent} from './dashboard/dashboard-side-column/dashboard-side-column.component';
import {UpcomingCarInspectionsModule} from './dashboard/upcoming-car-inspections/upcoming-car-inspections.module';

@NgModule({
  imports: [
    CommonModule, UpcomingCarInspectionsModule
  ],
  declarations: [DashboardComponent, DashboardSideColumnComponent]
})
export class DashboardModule {
}
