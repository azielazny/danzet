import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Car} from '../../../interfaces/car';

@Component({
  selector: 'app-add-cars-edit2',
  templateUrl: './add-cars-edit2.component.html',
  styleUrls: ['./add-cars-edit2.component.scss']
})

export class AddCarsEdit2Component implements OnInit {
  @Input() private defaultCarVersion: string;
  @Input() private defaultCapacity: string;
  @Input() private defaultRegistrationDate: string;
  @Input() private defaultEnginePower: string;
  @Input() private defaultFuel: string;
  @Input() private defaultDrSeries: string;
  @Input() private defaultCourse: string;
  @Input() private defaultDateAdded: string;
  @Input() private defaultInfo: string;
  @Output() private submitForm = new EventEmitter<Car>();
  @Output() private cancelForm = new EventEmitter<void>();
  private form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

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

  private submit() {
    this.submitForm.emit(this.form.value);
  }

  private cancel() {
    this.cancelForm.emit();
  }
}
