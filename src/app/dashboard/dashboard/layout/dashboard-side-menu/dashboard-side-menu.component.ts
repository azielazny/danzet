import {
  AfterViewChecked,
  AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, OnChanges, OnInit, Renderer2, SimpleChanges
} from '@angular/core';
import {ActivatedRoute, PRIMARY_OUTLET, Router, UrlSegment, UrlSegmentGroup, UrlTree} from '@angular/router';
import {NavigationService} from '../../../services/navigation.service';
import {AppNavigation} from '../../../classes/app-navigation';


@Component({
  selector: 'app-cars-management-menu',
  templateUrl: './dashboard-side-menu.component.html',
  styleUrls: ['./dashboard-side-menu.component.scss']
})
export class DashboardSideMenuComponent implements OnInit, AfterViewChecked {
  private randomColorScheme: number;
  private listCssTiles;
  private subMenuName: string;
  private subNavigation: AppNavigation[] = [];

  constructor(private cdr: ChangeDetectorRef, private el: ElementRef, private renderer: Renderer2,
              private route: ActivatedRoute, private navigationService: NavigationService, private router: Router) {
    this.route.params.subscribe(params => {
      this.subMenuName = params['subMenuId'];
      this.getNavigation();
    });
  }

  ngOnInit() {

  }


  private getNavigation(): void {
    this.navigationService.getNavigationById(this.subMenuName).then(nav => this.subNavigation = nav).catch(error => console.log(error));

  }

  private getRandomColorScheme(): number {
    this.randomColorScheme = Math.floor(Math.random() * 8) + 1;
    // this.cdr.detach();
    return this.randomColorScheme;
  }

  @HostListener('window:resize', ['$event'])
  private onResize(event) {
    this.listCssTiles.forEach(listItem => {
      this.renderer.setStyle(listItem, 'height', this.el.nativeElement.querySelector('.tile:first-of-type').offsetWidth + 'px');
    });
  }

  ngAfterViewChecked() {
    this.listCssTiles = this.el.nativeElement.querySelectorAll('.tile, .carousel-item') as HTMLElement[];
    this.listCssTiles.forEach(listItem => {
      this.renderer.setStyle(listItem, 'height', this.el.nativeElement.querySelector('.tile:first-of-type').offsetWidth + 'px');
    });
  }

}
