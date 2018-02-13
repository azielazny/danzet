import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Car, CarApi} from '../../interfaces/car';
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

  convertToMultiCar(field: CarApi[]): Car[] {
    return field.map(item => ({
      car_id: item.car_id,
      brand: item.brand,
      model: item.model,
      productionYear: item.production_year,
      vin: item.vin,
      registrationNumber: item.registration_number,
      registrationDate: item.registration_date,
      carVersion: item.car_version,
      capacity: item.capacity,
      enginePower: item.engine_power,
      fuel: item.fuel,
      drSeries: item.dr_series,
      course: item.course,
      dateAdded: item.date_added,
      info: item.info,
      client_id: item.client_id,
      modificationDate: item.modification_date
    }));
  }

  private toggle() {
    this.stacked = !this.stacked;
  }

  private getCarsList(): void {
    this.carService.getCarsList().subscribe(x =>
      this.cars = this.convertToMultiCar(x.result)
    );
  }


  private removeCar(carId: number) {
    // usunięcie samochodu z listy
  }
}

