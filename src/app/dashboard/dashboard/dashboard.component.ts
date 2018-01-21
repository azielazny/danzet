import {Component, OnInit, AfterViewInit, Renderer2, ElementRef, HostListener} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  private listCssTiles: HTMLElement[];
  private listCssTilesDoble: HTMLElement[];

  constructor(private title: Title, private route: ActivatedRoute, private router: Router, private el: ElementRef,
              private renderer: Renderer2) {
    title.setTitle(route.snapshot.data['title']);
  }

  ngOnInit() {
  }

  @HostListener('window:resize', ['$event'])
  private onResize(event) {
    this.listCssTiles.forEach(listItem => {
      this.renderer.setStyle(listItem, 'height', this.el.nativeElement.querySelector('#dashboardBody #tile1').offsetWidth + 'px');
    });
    this.listCssTilesDoble.forEach(listItem => {
      this.renderer.setStyle(listItem, 'height', this.el.nativeElement.querySelector('#dashboardBody #tile11').offsetWidth + 'px');
    });
  }

  ngAfterViewInit() {
    this.listCssTiles = this.el.nativeElement.querySelectorAll('#dashboardBody .tile, #dashboardBody .carousel, #dashboardBody .carousel-item') as HTMLElement[];
    this.listCssTiles.forEach(listItem => {
      this.renderer.setStyle(listItem, 'height', this.el.nativeElement.querySelector('#dashboardBody #tile1').offsetWidth + 'px');
    });
    this.listCssTilesDoble = this.el.nativeElement.querySelectorAll('#tile11, #tile11 .carousel, #tile11 .carousel-item') as HTMLElement[];
    this.listCssTilesDoble.forEach(listItem => {
      this.renderer.setStyle(listItem, 'height', this.el.nativeElement.querySelector('#tile11').offsetWidth - 10 + 'px');
    });

  }


}
