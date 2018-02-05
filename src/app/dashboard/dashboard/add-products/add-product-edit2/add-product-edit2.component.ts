import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Product} from "../../../classes/product";

@Component({
  selector: 'app-add-product-edit2',
  templateUrl: './add-product-edit2.component.html',
  styleUrls: ['./add-product-edit2.component.scss']
})
export class AddProductEdit2Component implements OnInit {

  @Input() private defaultWarehouseId: string;
  @Input() private defaultWarehouseName: string;
  @Input() private defaultSupplier: string;
  @Input() private defaultQuantity: string;
  @Input() private defaultReceivedDate: string;
  @Input() private defaultWorkerId: string;
  @Input() private defaultNetPrice: string;
  @Input() private defaultVat: string;
  @Input() private defaultGrossPrice: string;
  @Input() private defaultInfo: string;
  @Output() private submitForm = new EventEmitter<Product>();
  @Output() private cancelForm = new EventEmitter<void>();
  private form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      warehouseId: [this.defaultWarehouseId],
      warehouseName: [this.defaultWarehouseName],
      supplier: [this.defaultSupplier],
      quantity: [this.defaultQuantity],
      receivedDate: [this.defaultReceivedDate],
      workerId: [this.defaultWorkerId],
      netPrice: [this.defaultNetPrice],
      vat: [this.defaultVat],
      grossPrice: [this.defaultGrossPrice],
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
