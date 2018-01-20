import {AfterViewInit, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {CarInspections} from '../../../classes/car-inspections';

declare let $: any;

@Component({
  selector: 'app-upcoming-car-inspection-tile',
  templateUrl: './upcoming-car-inspection-tile.component.html',
  styleUrls: ['./upcoming-car-inspection-tile.component.scss']
})
export class UpcomingCarInspectionTileComponent implements OnInit, AfterViewInit {
  @Input()
  private to: string;
  @Input()
  private carInspections: CarInspections;
  private randomColorScheme: number;

  constructor(private cdr: ChangeDetectorRef) {
    this.to = 'rrrrrrrrr';
  }

  ngOnInit() {
  }

  private getRandomColorScheme(): number {
    this.randomColorScheme = Math.floor(Math.random() * 8) + 1;
    this.cdr.detach();
    return this.randomColorScheme;
  }


 private getRandomDataInterval(): number {
    return (Math.floor(Math.random() * 10) + 8) * 1000;

  }

  ngAfterViewInit() {

    $('.serviceTile .tile').height($('.serviceTile:first-of-type').width());
    $('.serviceTile .carousel').height($('.serviceTile:first-of-type').width());
    $('.serviceTile .carousel-item').height($('.serviceTile:first-of-type').width());
    $(window).resize(function () {
      if (this.resizeTO) {
        clearTimeout(this.resizeTO);
      }
      this.resizeTO = setTimeout(function () {
        $(this).trigger('resizeEnd');
      }, 10);
    });

    $(window).bind('resizeEnd', function () {
      $('.serviceTile .tile').height($('.serviceTile:first-of-type').width());
      $('.serviceTile .carousel').height($('.serviceTile:first-of-type').width());
      $('.serviceTile .carousel-item').height($('.serviceTile:first-of-type').width());
    });
  }


}
