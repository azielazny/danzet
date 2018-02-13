import {Component, Input, OnInit, NgModule, VERSION} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Product, ProductInventory} from '../../classes/product';
import {ProductService} from '../../services/product.service';
import {WarehouseService} from '../../services/warehouse.service';
import {Warehouse} from '../../classes/warehouse';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {

  @Input() private editedField: string;
  @Input() private product: Product = {};
  @Input() private productId: number;
  private warehouses: Warehouse[];
  private warehouseSelected: number;
  private filtredProductList: ProductInventory[] = [];

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private warehouseService: WarehouseService) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.productId = +params['productId'];
      this.warehouseSelected = (+params['warehouseId']) ? +params['warehouseId'] : 1;
      this.editedField = params['editedField'];
      this.getProductById();
      this.getWarehouseList();

    });
    // this.warehouseSelected = 1;

  }


  ngOnInit(): void {
    if (this.product.productInventory !== undefined) {
      this.getProductListByWarehouse();
    }
  }

  private submitProduct(name: Product) {
    this.product = name;
    this.resetEdit();
  }

  private toggleEdit(field) {
    this.editedField = field;
  }

  private resetEdit() {
    this.editedField = null;
  }

  private getProductById() {
    if (this.productId > 0) {
      this.productService.getProductById(this.productId).then(c => this.product = c);
    }
  }

  private getWarehouseList() {
    this.warehouseService.getWarehouseList().then(w => this.warehouses = w);
  }

  private ChangeWarehouseValue(event) {
    this.getProductListByWarehouse();
  }

  private getProductListByWarehouse() {
    this.filtredProductList = this.product.productInventory.filter(w => w.warehouse_id === this.warehouseSelected);
    console.log(this.filtredProductList);
  }

  private removeWarehousePosition(s: string) {
    //remove warehouse product data
  }
}
