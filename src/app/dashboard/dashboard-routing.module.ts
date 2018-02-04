import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardLayoutComponent} from './dashboard/layout/dashboard-layout/dashboard-layout.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UpcomingCarInspectionsComponent} from './dashboard/upcoming-car-inspections/upcoming-car-inspections/upcoming-car-inspections.component';
import {DashboardSideMenuComponent} from './dashboard/layout/dashboard-side-menu/dashboard-side-menu.component';
import {CarsManagementComponent} from './dashboard/cars-management/cars-management.component';
import {AddCarsComponent} from './dashboard/add-cars/add-cars.component';
import {ClientsManagementComponent} from './dashboard/clients-management/clients-management.component';
import {AddClientsComponent} from './dashboard/add-clients/add-clients.component';
import {ServicesManagementComponent} from "./dashboard/services-management/services-management.component";
import {AddServicesComponent} from "./dashboard/add-services/add-services.component";

export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      {path: '', component: DashboardComponent, data: {title: 'makeCarService ++:: Dashboard'}},
      {path: '', component: UpcomingCarInspectionsComponent, outlet: 'side_column'},
      {path: 'cars-management', component: CarsManagementComponent, data: {title: 'makeCarService ++:: Zarządzanie samochodami'}},
      {path: 'add-car', component: AddCarsComponent, data: {title: 'makeCarService ++:: Wprowadzanie samochodu'}},
      {path: 'add-car/:carId', component: AddCarsComponent, data: {title: 'makeCarService ++:: Wprowadzanie samochodu'}},
      {path: 'add-car/:carId/:clientId', component: AddCarsComponent, data: {title: 'makeCarService ++:: Wprowadzanie samochodu'}},
      {path: 'add-car/:carId/:clientId/:editedField', component: AddCarsComponent, data: {title: 'makeCarService ++:: Wprowadzanie samochodu'}},
      {path: 'clients-management', component: ClientsManagementComponent, data: {title: 'makeCarService ++:: Zarządzanie klientami'}},
      {path: 'add-client', component: AddClientsComponent, data: {title: 'makeCarService ++:: Wprowadzanie klienta'}},
      {path: 'add-client/:clientId', component: AddClientsComponent, data: {title: 'makeCarService ++:: Wprowadzanie klienta'}},
      {path: 'add-client/:clientId/:editedField', component: AddClientsComponent, data: {title: 'makeCarService ++:: Wprowadzanie klienta'}},
      {path: 'services-management', component: ServicesManagementComponent, data: {title: 'makeCarService ++:: Zarządzanie usługami'}},
      {path: 'add-service', component: AddServicesComponent, data: {title: 'makeCarService ++:: Wprowadzanie usługi'}},
      {path: 'add-service/:serviceId', component: AddServicesComponent, data: {title: 'makeCarService ++:: Wprowadzanie usługi'}},
      {path: 'add-service/:serviceId/:editedField', component: AddServicesComponent, data: {title: 'makeCarService ++:: Wprowadzanie usługi'}},
      {path: 'menu/:subMenuId', component: DashboardSideMenuComponent, outlet: 'side_column'}
    ]
  }
  // ,
  // {
  //   path: 'dashboard/cars-management',
  //   component: DashboardLayoutComponent,
  //   children: [
  //     {path: '', component: CarsManagementComponent, data: {title: 'makeCarService ++:: Zarządzanie samochodami'}},
  //     {path: '', component: DashboardSideMenuComponent, outlet: 'side_column'}
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
