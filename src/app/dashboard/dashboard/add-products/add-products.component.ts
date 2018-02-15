import {Component, Input, OnInit, NgModule, VERSION} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Product, ProductInventory} from '../../interfaces/product';
import {ProductService} from '../../services/product.service';
import {WarehouseService} from '../../services/warehouse.service';
import {Warehouse} from '../../interfaces/warehouse';
import {Message} from 'primeng/primeng';
import {MessageService} from 'primeng/components/common/messageservice';

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
  msgs: Message[] = [];


  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute,
              private warehouseService: WarehouseService, private messageService: MessageService) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.warehouseSelected = (+params['warehouseId']) ? +params['warehouseId'] : 1;
      if (params['productId']) {
        this.getProductById(+params['productId'], params['editedField']);
      }
      this.getWarehouseList();
    });
  }

  ngOnInit(): void {
    if (this.product.productInventory !== undefined) {
      this.getProductListByWarehouse();
    }
  }

  private submitProduct(item: Product) {
    if (typeof this.product !== 'undefined') {
      this.product.name = item.name;
      this.product.code = item.code;
      this.product.info = item.info;
      this.product.unit = item.unit;
      this.product.productInventory = item.productInventory;
      this.product.warehouseName = item.warehouseName;
      this.product.warehouse_id = item.warehouse_id;
      this.product.warehouseQuantity = item.warehouseQuantity;
    } else {
      this.product = {
        product_id: item.product_id,
        name: item.name,
        code: item.code,
        info: item.info,
        unit: item.unit,
        productInventory: item.productInventory,
        warehouseName: item.warehouseName,
        warehouse_id: item.warehouse_id,
        warehouseQuantity: item.warehouseQuantity
      };
    }
    this.resetEdit();
    (this.product.product_id > 0) ? this.updateProductById() : this.insertProduct();
  }

  private toggleEdit(field) {
    this.editedField = field;
  }

  private resetEdit() {
    this.editedField = null;
  }

  private getProductById(productId: number, editedField: string) {
    if (productId > 0) {
      this.productService.getProductById(productId).subscribe(c => {
        this.product = c;
        this.editedField = editedField;
        this.productId = productId;
      });
    }
  }

  private updateProductById() {
    this.productService.updateProductById(this.product).subscribe(c => {
      if (c === 'Product Updated') {
        this.msgs = [];
        this.msgs.push({severity: 'success', detail: 'Zaktualizowano dane produktu'});
      } else {
        this.msgs = [];
        this.msgs.push({severity: 'error', detail: 'Nie zaktualizowano danych produktu'});
      }
    });
  }

  private insertProduct() {
    this.productService.insertProduct(this.product).subscribe(c => {
      if (c > 0) {
        this.msgs = [];
        this.msgs.push({severity: 'success', detail: 'Dodano dane klienta'});
        this.product.product_id = c;
      } else {
        this.msgs = [];
        this.msgs.push({severity: 'error', detail: 'Nie dodano danych klienta'});
      }

    });
  }

  private getWarehouseList() {
    this.warehouseService.getWarehouseList().subscribe(w => this.warehouses = w);
  }

  private ChangeWarehouseValue(event) {
    this.getProductListByWarehouse();
  }

  private getProductListByWarehouse() {
    this.filtredProductList = this.product.productInventory.filter(w => w.warehouse_id === this.warehouseSelected);
    console.log(this.filtredProductList);
  }

  private removeWarehousePosition(s: string) {
    // remove warehouse product data
  }

  private removeProduct(productId: number) {
    this.productService.removeProductById(productId).subscribe(c => {
      if (c === 'Product Deleted') {
        this.product = {};
        this.productId = null;
        this.msgs = [];
        this.msgs.push({severity: 'success', detail: 'Usunięto produkt'});
      } else {
        this.msgs = [];
        this.msgs.push({severity: 'error', detail: 'Nie usunięto produktu'});
      }
    });
  }
}
