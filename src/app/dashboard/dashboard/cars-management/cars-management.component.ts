import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DataTableDirective} from 'angular-datatables';
import {Car} from '../../interfaces/car';
import {CarService} from '../../services/car.service';


@Component({
  selector: 'app-cars-management',
  templateUrl: './cars-management.component.html',
  styleUrls: ['./cars-management.component.scss']
})
export class CarsManagementComponent implements OnInit {

  cols: any[];
  private cars: Car[] = [];
  private stacked: boolean;

  constructor(private carService: CarService) {
  }

  ngOnInit() {
    this.getCarsList();
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



  private getCarsList(): void {
    this.carService.getCarsList().then(c => this.cars = c);
  }

  private removeCar(carId: number) {
    // usunięcie samochodu z listy
  }
}

