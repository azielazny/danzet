import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Product, ProductInventory} from "../../../classes/product";
import {WarehouseService} from "../../../services/warehouse.service";
import {Warehouse} from "../../../classes/warehouse";

@Component({
  selector: 'app-add-product-edit2',
  templateUrl: './add-product-edit2.component.html',
  styleUrls: ['./add-product-edit2.component.scss']
})
export class AddProductEdit2Component implements OnInit {

  @Input() private defaultWarehouseId: number;
  @Input() private defaultWarehouseName: string;
  @Input() private defaultSupplier: string;
  @Input() private defaultQuantity: string;
  @Input() private defaultReceivedDate: string;
  @Input() private defaultWorkerId: number;
  @Input() private defaultNetPrice: string;
  @Input() private defaultVat: string;
  @Input() private defaultGrossPrice: string;
  @Input() private defaultInfo: string;
  @Output() private submitForm = new EventEmitter<ProductInventory>();
  @Output() private cancelForm = new EventEmitter<void>();
  private form: FormGroup;
  private warehouses: Warehouse[];
  private warehouseSelected: number;

  constructor(private fb: FormBuilder, private warehouseService: WarehouseService) {
    this.defaultWarehouseId = 1;
    this.getWarehouseList();
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

  private getWarehouseList() {
    this.warehouseService.getWarehouseList().then(w => this.warehouses = w);
  }
}
