import {
  AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, Input, OnInit,
  Renderer2
} from '@angular/core';
import {CarInspections} from '../../../interfaces/car-inspections';


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
  private listCssTiles: HTMLElement[];

  constructor(private cdr: ChangeDetectorRef, private el: ElementRef,
  private renderer: Renderer2) {
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
  @HostListener('window:resize', ['$event'])
  private onResize(event) {
    this.listCssTiles.forEach(listItem => {
      this.renderer.setStyle(listItem, 'height', this.el.nativeElement.querySelector('.serviceTile:first-of-type').offsetWidth + 'px');
    });
  }

  ngAfterViewInit() {
    this.listCssTiles = this.el.nativeElement.querySelectorAll('.serviceTile .tile, .serviceTile .carousel, .serviceTile .carousel-item') as HTMLElement[];
    this.listCssTiles.forEach(listItem => {
      this.renderer.setStyle(listItem, 'height', this.el.nativeElement.querySelector('.serviceTile:first-of-type').offsetWidth + 'px');
    });

  }


}
