import {Component, OnInit, AfterViewInit, Renderer2, ElementRef} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';

declare let $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  constructor(private title: Title, private route: ActivatedRoute, private router: Router) {
    title.setTitle(route.snapshot.data['title']);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('#dashboardBody .tile').height($('#dashboardBody #tile1').width());
    $('#dashboardBody .carousel').height($('#dashboardBody #tile1').width());
    $('#dashboardBody .carousel-item').height($('#dashboardBody #tile1').width());


    $('#tile11 ').height($('#dashboardBody #tile11').width() - 10);
    $('#tile11 .carousel').height($('#tile11').width() - 10);
    $('#tile11 .carousel-item').height($('#tile11').width() - 10);
    $(window).resize(function () {
      if (this.resizeTO) {
        clearTimeout(this.resizeTO);
      }
      this.resizeTO = setTimeout(function () {
        $(this).trigger('resizeEnd');
      }, 10);
    });

    $(window).bind('resizeEnd', function () {
      $('#dashboardBody .tile').height($('#dashboardBody #tile1').width());
      $('#dashboardBody .carousel').height($('#dashboardBody #tile1').width());
      $('#dashboardBody .carousel-item').height($('#dashboardBody #tile1').width());
      $('#tile11 ').height($('#tile11').width() - 10);
      $('#tile11 .carousel').height($('#tile11').width() - 10);
      $('#tile11 .carousel-item').height($('#tile11').width() - 10);
    });
  }

}
