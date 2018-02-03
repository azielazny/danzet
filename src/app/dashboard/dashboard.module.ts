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
import {CarService} from './services/car.service';
import {AddCarsComponent} from './dashboard/add-cars/add-cars.component';
import {AddCarsEditComponent} from './dashboard/add-cars/add-cars-edit/add-cars-edit.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {ButtonModule, DropdownModule, PanelModule} from 'primeng/primeng';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddCarsEdit2Component } from './dashboard/add-cars/add-cars-edit2/add-cars-edit2.component';
import { AddCarsClientSearchComponent } from './dashboard/add-cars/add-cars-client-search/add-cars-client-search.component';
import {ClientService} from "./services/client.service";
import {HttpClientModule} from "@angular/common/http";
import { AddClientsComponent } from './dashboard/add-clients/add-clients.component';
import { ClientsManagementComponent } from './dashboard/clients-management/clients-management.component';
import { AddClientEditComponent } from './dashboard/add-clients/add-client-edit/add-client-edit.component';
import { AddClientCarListComponent } from './dashboard/add-clients/add-client-car-list/add-client-car-list.component';

@NgModule({
  imports: [
    CommonModule,
    UpcomingCarInspectionsModule,
    DashboardSearchModule,
    DashboardRoutingModule,
    DataTablesModule,
    BrowserModule,
    BrowserAnimationsModule,
    PanelModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    DashboardComponent,
    DashboardLogoutComponent,
    DashboardFooterComponent,
    DashboardLayoutComponent,
    DashboardBrandComponent,
    DashboardSideMenuComponent,
    CarsManagementComponent,
    AddCarsComponent,
    AddCarsEditComponent,
    AddCarsEdit2Component,
    AddCarsClientSearchComponent,
    AddClientsComponent,
    ClientsManagementComponent,
    AddClientEditComponent,
    AddClientCarListComponent],
  providers: [
    NavigationService,
    CarService,
    ClientService
    // FormBuilder
  ],
})
export class DashboardModule {
}

