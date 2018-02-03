import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Car} from "../../../classes/car";

@Component({
  selector: 'app-add-client-edit',
  templateUrl: './add-client-edit.component.html',
  styleUrls: ['./add-client-edit.component.scss']
})
export class AddClientEditComponent implements OnInit {

  @Input() defaultFirstName: string;
  @Input() defaultLastName: string;
  @Input() defaultZip: string;
  @Input() defaultCity: string;
  @Input() defaultStreet: string;
  @Input() defaultHouseNumber: string;
  @Input() defaultApartmentNumber: string;
  @Input() defaultPhone: string;
  @Input() defaultEmail: string;
  @Output() submitForm = new EventEmitter<Car>();
  @Output() cancelForm = new EventEmitter<void>();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: [this.defaultFirstName, Validators.required],
      lastName: [this.defaultLastName, Validators.required],
      zip: [this.defaultZip],
      city: [this.defaultCity],
      street: [this.defaultStreet],
      houseNumber: [this.defaultHouseNumber],
      apartmentNumber: [this.defaultApartmentNumber],
      phone: [this.defaultPhone],
      email: [this.defaultEmail]
    });
  }

  submit() {
    this.submitForm.emit(this.form.value);
  }

  cancel() {
    this.cancelForm.emit();
  }
}
