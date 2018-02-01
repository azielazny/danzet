import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Car} from "../../../classes/car";

@Component({
  selector: 'app-add-cars-edit2',
  templateUrl: './add-cars-edit2.component.html',
  styleUrls: ['./add-cars-edit2.component.scss']
})
export class AddCarsEdit2Component implements OnInit {
  @Input() defaultCarVersion: string;
  @Input() defaultCapacity: string;
  @Input() defaultRegistrationDate: string;
  @Input() defaultEnginePower: string;
  @Input() defaultFuel: string;
  @Input() defaultDrSeries: string;
  @Input() defaultCourse: string;
  @Input() defaultDateAdded: string;
  @Input() defaultInfo: string;
  @Output() submitForm = new EventEmitter<Car>();
  @Output() cancelForm = new EventEmitter<void>();
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      carVersion: [this.defaultCarVersion],
      registrationDate: [this.defaultRegistrationDate],
      enginePower: [this.defaultEnginePower],
      fuel: [this.defaultFuel],
      drSeries: [this.defaultDrSeries],
      course: [this.defaultCourse],
      dateAdded: [this.defaultDateAdded],
      info: [this.defaultInfo]
    });
  }

  submit() {
    this.submitForm.emit(this.form.value);
  }

  cancel() {
    this.cancelForm.emit();
  }
}
