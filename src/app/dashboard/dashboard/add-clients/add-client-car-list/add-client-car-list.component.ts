import {AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CarService} from '../../../services/car.service';
import {Car} from '../../../classes/car';

@Component({
  selector: 'app-add-client-car-list',
  templateUrl: './add-client-car-list.component.html',
  styleUrls: ['./add-client-car-list.component.scss']
})
export class AddClientCarListComponent implements OnInit, OnChanges {

  @Input() client_id: number;
  private cars: Car[];

  constructor(private carService: CarService) {
  }

  ngOnInit() {
    // this.getCarsByClientId();
  }

  ngOnChanges(changes: SimpleChanges) {

    this.getCarsByClientId(changes.client_id.currentValue);

  }

  getCarsByClientId(client_id:number) {
    this.carService.getCarsByClientId(client_id).then(c => this.cars = c);
    console.log(this.cars);
  }

  removeCar(s: string) {

  }
}
