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

  private clear() {
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

  private toggle() {
    this.stacked = !this.stacked;
  }

  private getCarsList(): void {
    this.carService.getCarsList().subscribe(x => this.cars = x);
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

