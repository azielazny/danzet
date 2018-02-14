import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Car} from "../../../interfaces/car";
import {Client} from "../../../interfaces/client";

@Component({
  selector: 'app-add-client-edit',
  templateUrl: './add-client-edit.component.html',
  styleUrls: ['./add-client-edit.component.scss']
})
export class AddClientEditComponent implements OnInit {

  @Input() private defaultFirstName: string;
  @Input() private defaultLastName: string;
  @Input() private defaultZip: string;
  @Input() private defaultCity: string;
  @Input() private defaultStreet: string;
  @Input() private defaultHouseNumber: string;
  @Input() private defaultApartmentNumber: string;
  @Input() private defaultPhone: string;
  @Input() private defaultEmail: string;
  @Output() private submitForm = new EventEmitter<Client>();
  @Output() private cancelForm = new EventEmitter<void>();
  private form: FormGroup;

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

  private submit() {
    this.submitForm.emit(this.form.value);
  }

  private cancel() {
    this.cancelForm.emit();
  }
}
