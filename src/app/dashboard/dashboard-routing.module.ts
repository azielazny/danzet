import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardLayoutComponent} from "./dashboard-layout/dashboard-layout.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {UpcomingCarInspectionsComponent} from "./dashboard/upcoming-car-inspections/upcoming-car-inspections/upcoming-car-inspections.component";

export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      {path: '', component: DashboardComponent, data: { title: 'makeCarService ++:: Dashboard' } },
      {path: '', component: UpcomingCarInspectionsComponent, outlet: 'side_column'}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
