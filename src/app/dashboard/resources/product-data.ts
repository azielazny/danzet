import {Product} from '../classes/product';

export const PRODUCT: Product[] = [
  {
    product_id: 1,
    name: 'Produkt 1',
    code: 'sdsd1112',
    info: 'wziął i nie zapłacił',
    unit: 'sztuk',
    productInventory: [{
      product_id: 1,
      netPrice: '111.33',
      warehouse_id: 1,
      warehouseName: 'gd1',
      vat: '23',
      grossPrice: '133.33',
      quantity: 22,
      supplier: 'hurtownia X',
      receivedDate: '01.01.2222',
      releaseDate: '',
      client_id: 1,
      car_id: 1,
      worker_id: 1
    }]
  }];


