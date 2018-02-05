import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DataTableDirective} from 'angular-datatables';
import {Product} from '../../classes/product';
import {ProductService} from '../../services/product.service';
import {WarehouseService} from '../../services/warehouse.service';
import {Warehouse} from '../../classes/warehouse';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit, AfterViewInit {

  @ViewChild(DataTableDirective)
  private datatableElement: DataTableDirective;

  private dtOptions: DataTables.Settings = {};

  private products: Product[] = [];
  private warehouses: Warehouse[] = [];

  constructor(private productService: ProductService, private warehouseService: WarehouseService) {
    this.getWarehouseList();
  }

  ngOnInit() {
    this.getProductsList();

    this.dtOptions = {

      columns: [
        {
          data: 'name'
        },
        {
          data: 'code'
        },
        {
          data: 'warehouseName'
        },
        {
          data: 'quantity'
        },
        {
          data: 'unit'
        },
        {
          orderable: false
        }
      ]
    };


  }

  ngAfterViewInit(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        $('input', this.footer()).on('keyup change', function () {
          if (that.search() !== this['value']) {
            that
              .search(this['value'])
              .draw();
          }
        });
      });
    });
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
    //remove product from list
  }
}

