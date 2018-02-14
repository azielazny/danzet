import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Car, CarApi} from '../../interfaces/car';
import {CarService} from '../../services/car.service';
import {Message} from 'primeng/primeng';
import {MessageService} from 'primeng/components/common/messageservice';


@Component({
  selector: 'app-cars-management',
  templateUrl: './cars-management.component.html',
  styleUrls: ['./cars-management.component.scss']
})
export class CarsManagementComponent implements OnInit {

  cols: any[];
  private cars: Car[] = [];
  private stacked: boolean;
  msgs: Message[] = [];

  constructor(private carService: CarService, private messageService: MessageService) {
  }

  clear() {
    this.messageService.clear();
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
      this.cars = this.convertToMultiCar(x)
    );
  }

  private removeCar(carId: number) {
    this.carService.removeCarById(carId).subscribe(c => {
      if (c === 'Car Deleted') {
        this.msgs = [];
        this.msgs.push({severity: 'success', detail: 'Usunięto samochód'});
        this.cars = this.cars.filter((val, i) => val.car_id !== carId);
      } else {
        this.msgs = [];
        this.msgs.push({severity: 'error', detail: 'Nie usunięto samochodu'});
      }
    });
  }

  private refreshTable() {
    this.getCarsList();
  }
}

