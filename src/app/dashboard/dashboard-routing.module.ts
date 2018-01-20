import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardLayoutComponent} from './dashboard/layout/dashboard-layout/dashboard-layout.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UpcomingCarInspectionsComponent} from './dashboard/upcoming-car-inspections/upcoming-car-inspections/upcoming-car-inspections.component';
import {CarsManagementMenuComponent} from './dashboard/cars-management/cars-management-menu/cars-management-menu.component';
import {CarsManagementComponent} from './dashboard/cars-management/cars-management.component';

export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      {path: '', component: DashboardComponent, data: {title: 'makeCarService ++:: Dashboard'}},
      {path: '', component: UpcomingCarInspectionsComponent, outlet: 'side_column'},
      {path: 'cars-management', component: CarsManagementComponent, data: {title: 'makeCarService ++:: Zarządzanie samochodami'}},
      {path: 'cars-management', component: CarsManagementMenuComponent, outlet: 'side_column'}
    ]
  }
  // ,
  // {
  //   path: 'dashboard/cars-management',
  //   component: DashboardLayoutComponent,
  //   children: [
  //     {path: '', component: CarsManagementComponent, data: {title: 'makeCarService ++:: Zarządzanie samochodami'}},
  //     {path: '', component: CarsManagementMenuComponent, outlet: 'side_column'}
  //   ]
  // }
];

@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
