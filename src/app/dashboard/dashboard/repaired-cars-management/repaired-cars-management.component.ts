import {Component, OnInit, ViewChild} from '@angular/core';
import {CarService} from '../../services/car.service';
import {DataTableDirective} from 'angular-datatables';
import {Car} from '../../classes/car';
import {ClientService} from '../../services/client.service';


@Component({
  selector: 'app-repaired-cars-management',
  templateUrl: './repaired-cars-management.component.html',
  styleUrls: ['./repaired-cars-management.component.scss']
})
export class RepairedCarsManagementComponent implements OnInit {

  // @ViewChild(DataTableDirective) //
  // private datatableElement: DataTableDirective; //
  //
  // private dtOptions: DataTables.Settings = {}; //

  cols: any[];
  selectedCar: Car;
  private cars: Car[] = [];
  private stacked: boolean;

  constructor(private carService: CarService, private clientService: ClientService) {
  }

  ngOnInit() {
    this.getCarsList();

    // this.dtOptions = {
    //   // ajax: 'data/data.json',
    //   order: [[1, 'desc']],
    //   columns: [
    //     {
    //       orderable: false,
    //       className: 'xx',
    //
    //     },
    //     {
    //       // title: 'Brand',
    //       data: 'brand'
    //     },
    //     {
    //       // title: 'Model',
    //       data: 'model'
    //     },
    //     {
    //       // title: 'Production date',
    //       data: 'productionDate'
    //     },
    //     {
    //       // title: 'Vin',
    //       data: 'vin'
    //     },
    //     {
    //       // title: 'Registration number',
    //       data: 'registrationNumber'
    //     },
    //     {
    //       // title: 'Registration date',
    //       data: 'registrationDate'
    //     },
    //     {
    //       orderable: false
    //     }
    //   ]
    // };

    this.cols = [
      {field: 'brand', header: 'Brand'},
      {field: 'model', header: 'Model'},
      {field: 'productionDate', header: 'Rocznik'},
      {field: 'vin', header: 'Vin'},
      {field: 'registrationNumber', header: 'Nr rej'},
      {field: 'registrationDate', header: 'Data'},
    ];

  }
  toggle() {
    this.stacked = !this.stacked;
  }


  // changeSort(event) {
  //   if (!event.order) {
  //     this.sortF = 'year';
  //   } else {
  //     this.sortF = event.field;
  //   }
  // }

  showCar(car: Car) {
    this.selectedCar = car;
    // this.dialogVisible = true;
  }



  // ngAfterViewInit(): void {
  //   this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
  //     dtInstance.columns().every(function () {
  //       const that = this;
  //       $('input', this.footer()).on('keyup change', function () {
  //         if (that.search() !== this['value']) {
  //           that
  //             .search(this['value'])
  //             .draw();
  //         }
  //       });
  //     });
  //   });
  // }


  private getCarsList(): void {
    this.carService.getCarsList().then(c => this.cars = c);
  }

  private removeCar(carId: number) {
    //usunięcie samochodu z listy
  }
}

