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
import {DashboardSideMenuComponent} from './dashboard/cars-management/dashboard-side-menu/dashboard-side-menu.component';
import {CarsManagementComponent} from './dashboard/cars-management/cars-management.component';
import {NavigationService} from './services/navigation.service';

@NgModule({
  imports: [
    CommonModule,
    UpcomingCarInspectionsModule,
    DashboardSearchModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    DashboardLogoutComponent,
    DashboardFooterComponent,
    DashboardLayoutComponent,
    DashboardBrandComponent,
    DashboardSideMenuComponent,
    CarsManagementComponent],
  providers: [
    NavigationService
  ],
})
export class DashboardModule {
}

