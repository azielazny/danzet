import {Component, OnInit} from '@angular/core';
import {Product} from '../../interfaces/product';
import {ProductService} from '../../services/product.service';
import {WarehouseService} from '../../services/warehouse.service';
import {Warehouse} from '../../interfaces/warehouse';
import {MessageService} from "primeng/components/common/messageservice";
import {Message} from "primeng/primeng";

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
  msgs: Message[] = [];

  constructor(private productService: ProductService, private warehouseService: WarehouseService, private messageService: MessageService) {
    this.getWarehouseList();
  }

  private clear() {
    this.messageService.clear();
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
    this.productService.getProductsList().subscribe(c => {
      this.products = c;
      this.products.forEach((val) => {
        val.warehouseName = this.warehouses.filter(w => w.warehouse_id === val.warehouse_id)[0].name;
      });
    });
  }

  private getWarehouseList() {
    this.warehouseService.getWarehouseList().subscribe(w => this.warehouses = w);
  }

  private removeProduct(productId: number) {
    this.productService.removeProductById(productId).subscribe(c => {
      if (c === 'Product Deleted') {
        this.msgs = [];
        this.msgs.push({severity: 'success', detail: 'Usunięto produkt'});
        this.products = this.products.filter((val, i) => val.product_id !== productId);
      } else {
        this.msgs = [];
        this.msgs.push({severity: 'error', detail: 'Nie usunięto produktu'});
      }
    });
  }

  private refreshTable() {
    this.getProductsList();
  }
}
