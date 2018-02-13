import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Car} from '../../../interfaces/car';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-cars-edit',
  templateUrl: './add-cars-edit.component.html',
  styleUrls: ['./add-cars-edit.component.scss']
})

export class AddCarsEditComponent implements OnInit {
  @Input() private defaultBrand: string;
  @Input() private defaultModel: string;
  @Input() private defaultProductionYear: string;
  @Input() private defaultVin: string;
  @Input() private defaultRegistrationNumber: string;
  @Input() private defaultCarVersion: string;
  @Input() private defaultCapacity: string;
  @Output() private submitForm = new EventEmitter<Car>();
  @Output() private cancelForm = new EventEmitter<void>();
  private form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      brand: [this.defaultBrand, Validators.required],
      model: [this.defaultModel, Validators.required],
      registrationNumber: [this.defaultRegistrationNumber],
      productionYear: [this.defaultProductionYear],
      vin: [this.defaultVin],
      capacity: [this.defaultCapacity]
    });
  }

  private submit() {
    this.submitForm.emit(this.form.value);
  }

  private cancel() {
    this.cancelForm.emit();
  }
}
