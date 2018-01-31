import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Car, TemporaryCar} from '../../../classes/car';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-cars-edit',
  templateUrl: './add-cars-edit.component.html',
  styleUrls: ['./add-cars-edit.component.scss']
})
export class AddCarsEditComponent implements OnInit {
  @Input() defaultBrand: string;
  @Input() defaultModel: string;
  @Output() submitForm = new EventEmitter<Car>();
  @Output() cancelForm = new EventEmitter<void>();
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      brand: [this.defaultBrand, Validators.required],
      model: [this.defaultModel, Validators.required]
    });
  }

  submit() {
    this.submitForm.emit(this.form.value);
  }

  cancel() {
    this.cancelForm.emit();
  }
}
