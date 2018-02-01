import {
  AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output,
  Renderer2
} from '@angular/core';
import {Car} from '../../classes/car';
import {CarService} from '../../services/car.service';
import {Client} from '../../classes/client';
import {CLIENT} from '../../resources/client-data';

@Component({
  selector: 'app-add-cars',
  templateUrl: './add-cars.component.html',
  styleUrls: ['./add-cars.component.scss']
})
export class AddCarsComponent implements OnInit {


  @Input() editedField: string;
  @Input() client: Client;
  // @Output() changeEditedField = new EventEmitter<string>();

  @Input() car: Car;

  constructor(private carService: CarService, private el: ElementRef, private renderer: Renderer2) {
    this.client = <Client>CLIENT[0];
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
