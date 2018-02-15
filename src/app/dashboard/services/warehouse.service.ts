import {Injectable} from '@angular/core';
import {Warehouse, WarehouseApi} from '../interfaces/warehouse';
import {ApiResponse} from '../interfaces/api-response';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class WarehouseService {

  private baseUrl: string = 'http://localhost/restapi/public';
  private queryUrl: string = '?search=';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    }),
    withCredentials: true
  };

  constructor(private http: HttpClient) {
  }


  getWarehouseList(): Observable<Warehouse[]> {
    return this.http.get<ApiResponse>(this.baseUrl + '/warehouses', this.httpOptions).map(x => this.convertToMultiWarehouse(x.result));
  }

  getWarehouseById(warehouseId: number): Observable<Warehouse> {
    return this.http.get<ApiResponse>(this.baseUrl + '/warehouses/' + warehouseId, this.httpOptions).map(x => this.convertToWarehouse(x.result));

  }

  updateWarehouseById(warehouseData: Warehouse): Observable<string> {
    return this.http.put<ApiResponse>(this.baseUrl + '/warehouses/' + warehouseData.warehouse_id,
      JSON.stringify(this.convertToWarehouseApi(warehouseData)), this.httpOptions).map(res => res.status);
  }

  insertWarehouse(warehouseData: Warehouse): Observable<number> {
    return this.http.post<ApiResponse>(this.baseUrl + '/warehouses', JSON.stringify(this.convertToWarehouseApi(warehouseData)),
      this.httpOptions).map(x => x.id);
  }

  removeWarehouseById(warehouseId: number): Observable<string> {
    return this.http.delete<ApiResponse>(this.baseUrl + '/warehouses/' + warehouseId, this.httpOptions).map(res => res.status);
  }

  convertToMultiWarehouse(field: WarehouseApi[]): Warehouse[] {
    return field.map(item => ({
      warehouse_id: item.warehouse_id,
      name: item.name,
      info: item.info,
      modificationDate: item.modification_date
    }));
  }

  private convertToWarehouseApi(item: Warehouse): WarehouseApi {
    return {
      warehouse_id: item.warehouse_id,
      name: item.name,
      info: item.info,
      modification_date: item.modificationDate
    };
  }

  private convertToWarehouse(item: WarehouseApi) {
    return {
      warehouse_id: item.warehouse_id,
      name: item.name,
      info: item.info,
      modificationDate: item.modification_date
    };
  }
}
