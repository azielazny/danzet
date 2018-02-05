import { Injectable } from '@angular/core';
import {Product} from '../classes/product';
import {PRODUCT} from '../resources/product-data';

@Injectable()
export class ProductService {

  constructor() {
  }

  getProductsList(): Promise<Product[]> {
    return Promise.resolve(PRODUCT);
  }

  getProductById(productId: number) {
    return Promise.resolve(PRODUCT.filter(c => c.product_id === productId)[0]);

  }
}
