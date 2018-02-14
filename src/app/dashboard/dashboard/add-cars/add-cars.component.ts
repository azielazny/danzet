import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Car, CarApi} from '../../interfaces/car';
import {CarService} from '../../services/car.service';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import {ActivatedRoute, Params} from '@angular/router';
import {Message} from 'primeng/primeng';
import {MessageService} from 'primeng/components/common/messageservice';


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
  msgs: Message[] = [];

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute, private messageService: MessageService) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.carId = +params['carId'];
      this.clientId = +params['clientId'];
      if (this.carId) {
        this.getCarById(this.carId, params['editedField']);
      }
    });
  }


  clear() {
    this.messageService.clear();
  }

  ngOnInit(): void {
  }

  private getClientId(evt) {
    // this.car.client_id = evt;
    this.clientId = evt;
    (this.car.car_id > 0) ? this.updateCarById() : this.insertCar();
  }

  private submitCar(name: Car) {
    if (typeof this.car !== 'undefined') {
      this.car.brand = name.brand;
      this.car.model = name.model;
      this.car.registrationNumber = name.registrationNumber;
      this.car.productionYear = name.productionYear;
      this.car.vin = name.vin;
      this.car.capacity = name.capacity;
    } else {
      this.car = {
        brand: name.brand,
        model: name.model,
        registrationNumber: name.registrationNumber,
        productionYear: name.productionYear,
        vin: name.vin,
        capacity: name.capacity
      };
    }
    this.resetEdit();
    (this.car.car_id > 0) ? this.updateCarById() : this.insertCar();
  }

  private submitCar2(name: Car) {
    if (typeof this.car === 'undefined') {
      this.car = {
        brand: '',
        model: ''
      };
    }
    this.car.carVersion = name.carVersion;
    this.car.registrationDate = name.registrationDate;
    this.car.enginePower = name.enginePower;
    this.car.fuel = name.fuel;
    this.car.drSeries = name.drSeries;
    this.car.course = name.course;
    this.car.dateAdded = name.dateAdded;
    this.car.info = name.info;

    this.resetEdit();
    (this.car.car_id > 0) ? this.updateCarById() : this.insertCar();
  }

  private toggleEdit(field) {
    this.editedField = field;
  }

  private resetEdit() {
    this.editedField = null;
  }

  private convertToCar(item: CarApi) {
    this.car = {
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
    };
  }

  private getCarById(carId: number, editedField: string) {
    this.carService.getCarById(carId).subscribe(c => {
      this.convertToCar(c);
      this.editedField = editedField;
    });
  }


  private updateCarById() {
    this.car.client_id = this.clientId;
    this.carService.updateCarById(this.car).subscribe(c => {
      if (c === 'User Updated') {
        this.msgs = [];
        this.msgs.push({severity: 'success', detail: 'Zaktualizowano samochód'});
      } else {
        this.msgs = [];
        this.msgs.push({severity: 'error', detail: 'Nie zaktualizowano samochodu'});
      }
    });
  }

  private insertCar() {
    this.car.client_id = this.clientId;
    this.carService.insertCar(this.car).subscribe(c => {
      if (c > 0) {
        this.msgs = [];
        this.msgs.push({severity: 'success', detail: 'Dodano samochód'});
        this.car.car_id = c;
      } else {
        this.msgs = [];
        this.msgs.push({severity: 'error', detail: 'Nie dodano samochodu'});
      }

    });
  }
}
