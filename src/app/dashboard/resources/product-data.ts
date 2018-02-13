import {Product} from '../interfaces/product';

export const PRODUCT: Product[] = [
  {
    product_id: 1,
    name: 'Produkt 1',
    code: 'sdsd1112',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores aut, consectetur ipsa molestias ' +
    'nesciunt placeat? Dolores illo iure repellat.',
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
      worker_id: 1,
      info: 'produkt uszkodzony'
    },
      {
        product_id: 1,
        netPrice: '111.33',
        warehouse_id: 2,
        warehouseName: 'gd2',
        vat: '23',
        grossPrice: '133.33',
        quantity: 11,
        supplier: 'hurtownia YXX',
        receivedDate: '01.01.2222',
        releaseDate: '',
        client_id: 1,
        car_id: 1,
        worker_id: 1,
        info: ''
      },
      {
        product_id: 1,
        netPrice: '411.33',
        warehouse_id: 2,
        warehouseName: 'gd2',
        vat: '23',
        grossPrice: '133.33',
        quantity: 2341,
        supplier: 'hurtownia NoName',
        receivedDate: '01.01.2445',
        releaseDate: '',
        client_id: 1,
        car_id: 1,
        worker_id: 1,
        info: 'produkt z'
      }],
    warehouse_id: 1,
    warehouseName: '',
    warehouseQuantity: '33.33'
  }


];


