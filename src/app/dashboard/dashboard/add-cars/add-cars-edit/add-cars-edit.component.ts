import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Car} from '../../../classes/car';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-cars-edit',
  templateUrl: './add-cars-edit.component.html',
  styleUrls: ['./add-cars-edit.component.scss']
})
export class AddCarsEditComponent implements OnInit {
  @Input() defaultBrand: string;
  @Input() defaultModel: string;
  @Input() defaultProductionYear: string;
  @Input() defaultVin: string;
  @Input() defaultRegistrationNumber: string;
  @Input() defaultRegistrationDate: string;
  @Input() defaultCarVersion: string;
  @Input() defaultCapacity: string;
  @Input() defaultEnginePower: string;
  @Input() defaultFuel: string;
  @Input() defaultDrSeries: string;
  @Output() submitForm = new EventEmitter<Car>();
  @Output() cancelForm = new EventEmitter<void>();
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      brand: [this.defaultBrand, Validators.required],
      model: [this.defaultModel, Validators.required],
      registrationNumber: [this.defaultRegistrationNumber],
      productionYear: [this.defaultProductionYear],
      vin: [this.defaultVin],
      registrationDate: [this.defaultRegistrationDate],
      carVersion: [this.defaultCarVersion],
      capacity: [this.defaultCapacity],
      enginePower: [this.defaultEnginePower],
      fuel: [this.defaultFuel],
      drSeries: [this.defaultDrSeries]
    });
  }

  submit() {
    this.submitForm.emit(this.form.value);
  }

  cancel() {
    this.cancelForm.emit();
  }
}
