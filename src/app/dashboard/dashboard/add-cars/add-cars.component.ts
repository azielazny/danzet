import {
  AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output,
  Renderer2
} from '@angular/core';
import {Car} from '../../classes/car';
import {CarService} from '../../services/car.service';
import {Client} from '../../classes/client';
import {CLIENT} from '../../resources/client-data';
import {Validators} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-add-cars',
  templateUrl: './add-cars.component.html',
  styleUrls: ['./add-cars.component.scss']
})
export class AddCarsComponent implements OnInit {


  @Input() editedField: string;
  @Input() car: Car;

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
    this.getCarById();
  }

  getClientId(evt) {
    this.car.client_id = evt;
  }

  submitCar(name: Car) {
    this.car.brand = name.brand;
    this.car.model = name.model;
    this.car.registrationNumber = name.registrationNumber;
    this.car.productionYear = name.productionYear;
    this.car.vin = name.vin;
    this.car.capacity = name.capacity;
    this.resetEdit();
  }

  submitCar2(name: Car) {
    this.car.carVersion = name.carVersion;
    this.car.registrationDate = name.registrationDate;
    this.car.enginePower = name.enginePower;
    this.car.fuel = name.fuel;
    this.car.drSeries = name.drSeries;
    this.car.course = name.course;
    this.car.dateAdded = name.dateAdded;
    this.car.info = name.info;
    this.resetEdit();
  }

  toggleEdit(field) {
    this.editedField = field;
  }

  resetEdit() {
    this.editedField = null;
  }

  private getCarById() {
    this.carService.getCarById(11).then(c => this.car = c);//id samochodu będzie z url
  }


}
