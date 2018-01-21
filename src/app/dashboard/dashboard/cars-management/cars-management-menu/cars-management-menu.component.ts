import {
  AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, Renderer2,
  ViewChild
} from '@angular/core';

declare let $: any;


@Component({
  selector: 'app-cars-management-menu',
  templateUrl: './cars-management-menu.component.html',
  styleUrls: ['./cars-management-menu.component.scss']
})
export class CarsManagementMenuComponent implements OnInit, AfterViewInit {
  private randomColorScheme: number;
  private listCssTiles;

  constructor(private cdr: ChangeDetectorRef, private el: ElementRef,
              private renderer: Renderer2) {
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
  onResize(event) {
    this.listCssTiles.forEach(listItem => {
      this.renderer.setStyle(listItem, 'height', this.el.nativeElement.querySelector('.tile:first-of-type').offsetWidth + 'px');
    });
  }

  ngAfterViewInit() {
    this.listCssTiles = this.el.nativeElement.querySelectorAll('.tile, .carousel-item') as HTMLElement[];
    this.listCssTiles.forEach(listItem => {
      this.renderer.setStyle(listItem, 'height', this.el.nativeElement.querySelector('.tile:first-of-type').offsetWidth + 'px');
    });

  }

}
