import {Component, OnInit} from '@angular/core';
import {Product} from '../../classes/product';
import {ProductService} from '../../services/product.service';
import {WarehouseService} from '../../services/warehouse.service';
import {Warehouse} from '../../classes/warehouse';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit {

  cols: any[];
  private stacked: boolean;
  private products: Product[] = [];
  private warehouses: Warehouse[] = [];

  constructor(private productService: ProductService, private warehouseService: WarehouseService) {
    this.getWarehouseList();
  }

  ngOnInit() {
    this.getProductsList();

    this.cols = [
      {field: 'name', header: 'Nazwa'},
      {field: 'code', header: 'Kod'},
      {field: 'warehouseName', header: 'Nazwa magazynu'},
      {field: 'quantity', header: 'Ilość'},
      {field: 'unit', header: 'Jednostka'}
    ];

  }

  toggle() {
    this.stacked = !this.stacked;
  }

  private getProductsList(): void {
    this.productService.getProductsList().then(c => {
      this.products = c;
      this.products.forEach((val) => {
        val.warehouseName = this.warehouses.filter(w => w.warehouse_id === val.warehouse_id)[0].name;
      });
    });
  }

  private getWarehouseList() {
    this.warehouseService.getWarehouseList().then(w => this.warehouses = w);
  }

  private removeProduct(productId: number) {
    // remove product from list
  }
}

