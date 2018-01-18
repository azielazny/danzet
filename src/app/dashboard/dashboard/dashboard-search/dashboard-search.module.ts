import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardSearchComponent } from './dashboard-search/dashboard-search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DashboardSearchComponent
  ],
  declarations: [DashboardSearchComponent]
})
export class DashboardSearchModule { }
