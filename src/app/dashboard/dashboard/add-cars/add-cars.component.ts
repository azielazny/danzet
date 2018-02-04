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
import {ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-add-cars',
  templateUrl: './add-cars.component.html',
  styleUrls: ['./add-cars.component.scss']
})
export class AddCarsComponent implements OnInit {


  @Input() private editedField: string;
  @Input() private car: Car;
  @Input() private carId: number;
  @Input() private clientId: number;

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.carId = +params['carId'];
      this.clientId = +params['clientId'];
      this.editedField = params['editedField'];
      this.getCarById(this.carId);
    });
  }

  ngOnInit(): void {

  }

  private getClientId(evt) {
    // this.car.client_id = evt;
    this.clientId = evt;
  }

  private submitCar(name: Car) {
    this.car.brand = name.brand;
    this.car.model = name.model;
    this.car.registrationNumber = name.registrationNumber;
    this.car.productionYear = name.productionYear;
    this.car.vin = name.vin;
    this.car.capacity = name.capacity;
    this.resetEdit();
  }

  private submitCar2(name: Car) {
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

  private toggleEdit(field) {
    this.editedField = field;
  }

  private resetEdit() {
    this.editedField = null;
  }

  private getCarById(carId: number) {
    this.carService.getCarById(carId).then(c => {
      this.car = c;
      if (typeof this.car !== 'undefined') { this.clientId = this.car.client_id; }
    });
  }


}
