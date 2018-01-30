import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UpcomingCarInspectionsModule} from './dashboard/upcoming-car-inspections/upcoming-car-inspections.module';
import {DashboardLogoutComponent} from './dashboard/layout/dashboard-logout/dashboard-logout.component';
import {DashboardSearchModule} from './dashboard/dashboard-search/dashboard-search.module';
import {DashboardFooterComponent} from './dashboard/layout/dashboard-footer/dashboard-footer.component';
import {DashboardLayoutComponent} from './dashboard/layout/dashboard-layout/dashboard-layout.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardBrandComponent} from './dashboard/layout/dashboard-brand/dashboard-brand.component';
import {DashboardSideMenuComponent} from './dashboard/layout/dashboard-side-menu/dashboard-side-menu.component';
import {CarsManagementComponent} from './dashboard/cars-management/cars-management.component';
import {NavigationService} from './services/navigation.service';
import {DataTablesModule} from 'angular-datatables';
import {CarService} from "./services/car.service";
import { AddCarsComponent } from './dashboard/add-cars/add-cars.component';
import { AddCarsEditComponent } from './dashboard/add-cars/add-cars-edit/add-cars-edit.component';

@NgModule({
  imports: [
    CommonModule,
    UpcomingCarInspectionsModule,
    DashboardSearchModule,
    DashboardRoutingModule,
    DataTablesModule
  ],
  declarations: [
    DashboardComponent,
    DashboardLogoutComponent,
    DashboardFooterComponent,
    DashboardLayoutComponent,
    DashboardBrandComponent,
    DashboardSideMenuComponent,
    CarsManagementComponent,
    AddCarsComponent
    /*AddCarsEditComponent*/],
  providers: [
    NavigationService,
    CarService
  ],
})
export class DashboardModule {
}

