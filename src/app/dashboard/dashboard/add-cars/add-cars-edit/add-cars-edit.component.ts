import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Car} from "../../../classes/car";

@Component({
  selector: 'app-add-cars-edit',
  templateUrl: './add-cars-edit.component.html',
  styleUrls: ['./add-cars-edit.component.scss']
})
export class AddCarsEditComponent implements OnInit {
  // @Input() defaultFirstname: string;
  // @Input() defaultLastname: string;
  // @Output() submitForm = new EventEmitter<Car>();
  // @Output() cancelForm = new EventEmitter<void>();
  // form: FormGroup;

  constructor(/*private fb: FormBuilder*/) { }

  ngOnInit() {
    // this.form = this.fb.group({
    //   firstname: [this.defaultFirstname, Validators.required],
    //   lastname: [this.defaultLastname, Validators.required]
    // });
  }

  // submit() {
  //   this.submitForm.emit(this.form.value);
  // }
  //
  // cancel() {
  //   this.cancelForm.emit();
  // }
}
