import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DataTableDirective} from 'angular-datatables';
import {Car} from '../../classes/car';
import {CarService} from '../../services/car.service';


@Component({
  selector: 'app-cars-management',
  templateUrl: './cars-management.component.html',
  styleUrls: ['./cars-management.component.scss']
})
export class CarsManagementComponent implements OnInit, AfterViewInit {
  @ViewChild(DataTableDirective)
  private datatableElement: DataTableDirective;

  private dtOptions: DataTables.Settings = {};

  private cars: Car[] = [];

  constructor(private carService: CarService) {
  }

  ngOnInit() {
    this.getCarsList();

    this.dtOptions = {
      // ajax: 'data/data.json',

      columns: [
        {
          // title: 'Brand',
          data: 'brand'
        },
        {
          // title: 'Model',
          data: 'model'
        },
        {
          // title: 'Production date',
          data: 'productionDate'
        },
        {
          // title: 'Vin',
          data: 'vin'
        },
        {
          // title: 'Registration number',
          data: 'registrationNumber'
        },
        {
          // title: 'Registration date',
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


  private getCarsList(): void {
    this.carService.getCarsList().then(c => this.cars = c);
  }
  private removeCar(carId:number) {
    //usunięcie samochodu z listy
  }
}

