import {Component, OnInit, ViewChild} from '@angular/core';
import {CarService} from '../../services/car.service';
import {Car, CarApi} from '../../interfaces/car';
import {ClientService} from '../../services/client.service';


@Component({
  selector: 'app-repaired-cars-management',
  templateUrl: './repaired-cars-management.component.html',
  styleUrls: ['./repaired-cars-management.component.scss']
})
export class RepairedCarsManagementComponent implements OnInit {


  cols: any[];
  private cars: Car[] = [];
  private stacked: boolean;

  constructor(private carService: CarService, private clientService: ClientService) {
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
    // usunięcie samochodu z listy
  }
}

