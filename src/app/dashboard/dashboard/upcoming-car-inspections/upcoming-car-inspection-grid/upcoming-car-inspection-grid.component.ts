import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {CarInspections} from '../../../interfaces/car-inspections';
import {CarInspectionService} from '../../../services/car-inspection.service';

@Component({
  selector: 'app-upcoming-car-inspection-grid',
  templateUrl: './upcoming-car-inspection-grid.component.html',
  styleUrls: ['./upcoming-car-inspection-grid.component.scss']
})
export class UpcomingCarInspectionGridComponent implements OnInit {
  @Input()
  private from: string;

  private carsInspections: CarInspections[];

  constructor(private carsInspectionsService: CarInspectionService) {
    this.from = 'xxxxxxxxxxx';
  }

  ngOnInit() {
    this.getCarsInspections();

  }


  getCarsInspections(): void {
    this.carsInspectionsService.getCarsInspections().then(carsInspections => this.carsInspections = carsInspections);
  }
}



