import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UpcomingCarInspectionsComponent} from './upcoming-car-inspections/upcoming-car-inspections.component';
import {UpcomingCarInspectionGridComponent} from './upcoming-car-inspection-grid/upcoming-car-inspection-grid.component';
import {UpcomingCarInspectionTileComponent} from './upcoming-car-inspection-tile/upcoming-car-inspection-tile.component';
import {CarInspectionService} from "../../services/car-inspection.service";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    UpcomingCarInspectionsComponent
  ],
  providers: [
    CarInspectionService
  ],
  declarations: [UpcomingCarInspectionsComponent, UpcomingCarInspectionGridComponent, UpcomingCarInspectionTileComponent]
})
export class UpcomingCarInspectionsModule {
}
