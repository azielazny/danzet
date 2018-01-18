import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-upcoming-car-inspection-grid',
  templateUrl: './upcoming-car-inspection-grid.component.html',
  styleUrls: ['./upcoming-car-inspection-grid.component.scss']
})
export class UpcomingCarInspectionGridComponent implements OnInit {
  @Input()
  private from: string;

  constructor() {
    this.from = 'xxxxxxxxxxx';
  }

  ngOnInit() {
  }

}
