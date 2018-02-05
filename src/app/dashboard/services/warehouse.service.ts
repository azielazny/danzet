import { Injectable } from '@angular/core';
import {Warehouse} from '../classes/warehouse';
import {WAREHOUSE} from '../resources/warehouse_data';

@Injectable()
export class WarehouseService {

  constructor() {
  }

  getWarehouseList(): Promise<Warehouse[]> {
    return Promise.resolve(WAREHOUSE);
  }

  getWarehouseById(warehouseId: number) {
    return Promise.resolve(WAREHOUSE.filter(c => c.warehouse_id === warehouseId)[0]);

  }
}
