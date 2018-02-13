import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Service} from "../../../interfaces/service";
import {Product} from "../../../interfaces/product";

@Component({
  selector: 'app-add-product-edit',
  templateUrl: './add-product-edit.component.html',
  styleUrls: ['./add-product-edit.component.scss']
})
export class AddProductEditComponent implements OnInit {

  @Input() private defaultName: string;
  @Input() private defaultCode: string;
  @Input() private defaultQuantity: string;
  @Input() private defaultUnit: string;
  @Input() private defaultInfo: string;
  @Output() private submitForm = new EventEmitter<Product>();
  @Output() private cancelForm = new EventEmitter<void>();
  private form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: [this.defaultName, Validators.required],
      code: [this.defaultCode, Validators.required],
      quantity: [this.defaultQuantity],
      unit: [this.defaultUnit],
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
