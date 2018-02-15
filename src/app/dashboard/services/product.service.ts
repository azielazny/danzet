import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiResponse} from '../interfaces/api-response';
import {Product, ProductApi} from '../interfaces/Product';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProductService {

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


  getProductsList(): Observable<Product[]> {
    return this.http.get<ApiResponse>(this.baseUrl + '/products', this.httpOptions).map(x => this.convertToMultiProduct(x.result));
  }

  getProductById(productId: number): Observable<Product> {
    return this.http.get<ApiResponse>(this.baseUrl + '/products/' + productId, this.httpOptions).map(x => this.convertToProduct(x.result));

  }

  updateProductById(productData: Product): Observable<string> {
    return this.http.put<ApiResponse>(this.baseUrl + '/products/' + productData.product_id,
      JSON.stringify(this.convertToProductApi(productData)), this.httpOptions).map(res => res.status);
  }

  insertProduct(productData: Product): Observable<number> {
    return this.http.post<ApiResponse>(this.baseUrl + '/products', JSON.stringify(this.convertToProductApi(productData)),
      this.httpOptions).map(x => x.id);
  }

  removeProductById(productId: number): Observable<string> {
    return this.http.delete<ApiResponse>(this.baseUrl + '/products/' + productId, this.httpOptions).map(res => res.status);
  }

  convertToMultiProduct(field: ProductApi[]): Product[] {
    return field.map(item => ({
      product_id: item.product_id,
      name: item.name,
      code: item.code,
      info: item.info,
      unit: item.unit,
      productInventory: item.product_inventory,
      warehouseName: item.warehouse_name,
      warehouse_id: item.warehouse_id,
      warehouseQuantity: item.warehouse_quantity,
      modificationDate: item.modification_date
    }));
  }

  private convertToProductApi(item: Product): ProductApi {
    return {
      product_id: item.product_id,
      name: item.name,
      code: item.code,
      info: item.info,
      unit: item.unit,
      product_inventory: item.productInventory,
      warehouse_name: item.warehouseName,
      warehouse_id: item.warehouse_id,
      warehouse_quantity: item.warehouseQuantity,
      modification_date: item.modificationDate
    };
  }

  private convertToProduct(item: ProductApi) {
    return {
      product_id: item.product_id,
      name: item.name,
      code: item.code,
      info: item.info,
      unit: item.unit,
      productInventory: item.product_inventory,
      warehouseName: item.warehouse_name,
      warehouse_id: item.warehouse_id,
      warehouseQuantity: item.warehouse_quantity,
      modificationDate: item.modification_date
    };
  }
}
