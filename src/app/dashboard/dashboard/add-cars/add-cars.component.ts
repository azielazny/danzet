import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Car} from '../../classes/car';
import {CarService} from '../../services/car.service';

@Component({
  selector: 'app-add-cars',
  templateUrl: './add-cars.component.html',
  styleUrls: ['./add-cars.component.scss']
})
export class AddCarsComponent implements OnInit {


  @Input() editedField: string = 'car';
  // @Output() changeEditedField = new EventEmitter<string>();

  @Input() car: Car;

  constructor(private carService: CarService) {
  }

  submitCar(name: Car) {
    this.car = name;
    this.resetEdit();
  }

  toggleEdit(field) {
    this.editedField = field;
  }

  resetEdit() {
    this.editedField = null;
  }

  ngOnInit(): void {
    this.getCarById();
  }

  private getCarById() {
    this.carService.getCarById(11).then(c => this.car = c);
  }
}
