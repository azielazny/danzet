import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-upcoming-car-inspection-tile',
  templateUrl: './upcoming-car-inspection-tile.component.html',
  styleUrls: ['./upcoming-car-inspection-tile.component.scss']
})
export class UpcomingCarInspectionTileComponent implements OnInit {
  @Input()
  private to: string;

  constructor() {
    this.to = 'rrrrrrrrr';
  }

  ngOnInit() {
  }

}
