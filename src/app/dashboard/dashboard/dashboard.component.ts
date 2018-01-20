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
    $('#dashboardBody .tile').height($('#dashboardBody #tile21').width());
    $('#upcoming-car-inspections .tile').height($('#upcoming-car-inspections #tile21').width());
    $('#dashboardBody .carousel').height($('#dashboardBody #tile21').width());
    $('#dashboardBody .carousel-item').height($('#dashboardBody #tile21').width());

    $('.services .tile').height($('#tile31').width());
    $('.serviceTile .carousel').height($('#tile31').width());
    $('.serviceTile .carousel-item').height($('#tile31').width());

    $('#tile1 ').height($('#dashboardBody #tile1').width() - 10);
    $('#tile1 .carousel').height($('#tile1').width() - 10);
    $('#tile1 .carousel-item').height($('#tile1').width() - 10);
    $(window).resize(function () {
      if (this.resizeTO) {
        clearTimeout(this.resizeTO);
      }
      this.resizeTO = setTimeout(function () {
        $(this).trigger('resizeEnd');
      }, 10);
    });

    $(window).bind('resizeEnd', function () {
      $('#dashboardBody .tile').height($('#dashboardBody #tile21').width());
      $('#upcoming-car-inspections .tile').height($('#upcoming-car-inspections #tile21').width());
      $('#dashboardBody .carousel').height($('#dashboardBody #tile21').width());
      $('#dashboardBody .carousel-item').height($('#dashboardBody #tile21').width());
      $('#tile1 ').height($('#tile1').width() - 10);
      $('#tile1 .carousel').height($('#tile1').width() - 10);
      $('#tile1 .carousel-item').height($('#tile1').width() - 10);

      $('.services .tile').height($('#tile31').width());
      $('.serviceTile .carousel').height($('#tile31').width());
      $('.serviceTile .carousel-item').height($('#tile31').width());
    });
  }

}
