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
import {ButtonModule, DataTableModule, DropdownModule, PanelModule, SharedModule} from 'primeng/primeng';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddCarsEdit2Component } from './dashboard/add-cars/add-cars-edit2/add-cars-edit2.component';
import { AddCarsClientSearchComponent } from './dashboard/add-cars/add-cars-client-search/add-cars-client-search.component';
import {ClientService} from './services/client.service';
import {HttpClientModule} from '@angular/common/http';
import { AddClientsComponent } from './dashboard/add-clients/add-clients.component';
import { ClientsManagementComponent } from './dashboard/clients-management/clients-management.component';
import { AddClientEditComponent } from './dashboard/add-clients/add-client-edit/add-client-edit.component';
import { AddClientCarListComponent } from './dashboard/add-clients/add-client-car-list/add-client-car-list.component';
import { ServicesManagementComponent } from './dashboard/services-management/services-management.component';
import { AddServicesComponent } from './dashboard/add-services/add-services.component';
import {ServiceService} from './services/service.service';
import { AddServicesEditComponent } from './dashboard/add-services/add-services-edit/add-services-edit.component';
import { AddProductsComponent } from './dashboard/add-products/add-products.component';
import { WarehouseComponent } from './dashboard/warehouse/warehouse.component';
import {ProductService} from './services/product.service';
import {WarehouseService} from './services/warehouse.service';
import { AddProductEditComponent } from './dashboard/add-products/add-product-edit/add-product-edit.component';
import { AddProductEdit2Component } from './dashboard/add-products/add-product-edit2/add-product-edit2.component';
import { RepairedCarsManagementComponent } from './dashboard/repaired-cars-management/repaired-cars-management.component';

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
    HttpClientModule,
    SharedModule, DataTableModule
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
    AddClientCarListComponent,
    ServicesManagementComponent,
    AddServicesComponent,
    AddServicesEditComponent,
    AddProductsComponent,
    WarehouseComponent,
    AddProductEditComponent,
    AddProductEdit2Component,
    RepairedCarsManagementComponent],
  providers: [
    NavigationService,
    CarService,
    ClientService,
    ServiceService,
    ProductService,
    WarehouseService
    // FormBuilder
  ],
})
export class DashboardModule {
}

