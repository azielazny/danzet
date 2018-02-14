import {AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CarService} from '../../../services/car.service';
import {Car} from '../../../interfaces/car';

@Component({
  selector: 'app-add-client-car-list',
  templateUrl: './add-client-car-list.component.html',
  styleUrls: ['./add-client-car-list.component.scss']
})
export class AddClientCarListComponent implements OnInit, OnChanges {

  @Input() private client_id: number;
  private cars: Car[] = [];

  constructor(private carService: CarService) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.client_id.currentValue !== null) {
      this.getCarsByClientId(changes.client_id.currentValue);
    }

  }

  private getCarsByClientId(client_id: number) {
    this.carService.getCarsByClientId(client_id).subscribe(c => this.cars = c);
  }

  private removeCar(carId: number) {
//remove client_id from car_id
    this.carService.removeCarById(carId).subscribe(c => {
      if (c === 'Car Deleted') {
        // this.msgs = [];
        // this.msgs.push({severity: 'success', detail: 'Usunięto samochód'});
        this.cars = this.cars.filter((val, i) => val.car_id !== carId);
      } else {
        // this.msgs = [];
        // this.msgs.push({severity: 'error', detail: 'Nie usunięto samochodu'});
      }
    });
  }
}
