export interface Product {
  product_id?: number;
  name?: string;
  code?: string;
  info?: string;
  unit?: string;
  productInventory?: ProductInventory[];
  warehouseName?: string; //dynamic fields for warehouse
  warehouse_id?: number; //temporary dynamic fields for warehouse
  warehouseQuantity?:string;
}

export interface ProductInventory {
  product_id?: number;
  netPrice?: string;
  warehouse_id?: number;
  warehouseName?: string;
  vat?: string;
  grossPrice?: string;
  quantity?: number;
  supplier?: string;
  receivedDate?: string;
  releaseDate?: string;
  client_id?: number;
  car_id?: number;
  worker_id?: number;
  info?: string;
}
