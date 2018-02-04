import {
  AfterViewChecked,
  AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output,
  Renderer2, SimpleChange, SimpleChanges
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
import {ActivatedRoute, Params} from "@angular/router";


@Component({
  selector: 'app-add-cars',
  templateUrl: './add-cars.component.html',
  styleUrls: ['./add-cars.component.scss']
})
export class AddCarsComponent implements OnInit {


  @Input() editedField: string;
  @Input() car: Car;
  @Input() private carId: number;

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.carId = +params['carId'];
    });
    this.getCarById(this.carId);
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

  private getCarById(carId: number) {
    this.carService.getCarById(carId).then(c => this.car = c);
  }


}
