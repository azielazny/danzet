import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DataTableDirective} from 'angular-datatables';
declare var $: any;

@Component({
  selector: 'app-cars-management',
  templateUrl: './cars-management.component.html',
  styleUrls: ['./cars-management.component.scss']
})
export class CarsManagementComponent implements OnInit, AfterViewInit {
  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};

  constructor() {
  }

  ngOnInit() {

    this.dtOptions = {
      // ajax: 'data/data.json',

      columns: [
        {
          title: 'Brand',
          data: 'brand'
        },
        {
          title: 'Model',
          data: 'model'
        },
        {
          title: 'Production date',
          data: 'productionDate'
        },
        {
          title: 'Vin',
          data: 'vin'
        },
        {
          title: 'Registration number',
          data: 'registrationNumber'
        },
        {
          title: 'Registration date',
          data: 'registrationDate'
        },
        {
          orderable: false
        }
      ]
    };





  }

  ngAfterViewInit(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        $('input', this.footer()).on('keyup change', function () {
          if (that.search() !== this['value']) {
            that
              .search(this['value'])
              .draw();
          }
        });
      });
    });
  }


}

