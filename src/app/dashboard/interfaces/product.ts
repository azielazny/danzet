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
  modificationDate?:string;
}

export interface ProductApi {
  product_id?: number;
  name?: string;
  code?: string;
  info?: string;
  unit?: string;
  product_inventory?: ProductInventory[];
  warehouse_name?: string; //dynamic fields for warehouse
  warehouse_id?: number; //temporary dynamic fields for warehouse
  warehouse_quantity?:string;
  modification_date?:string;
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

export interface ProductInventoryApi {
  product_id?: number;
  net_price?: string;
  warehouse_id?: number;
  warehouse_name?: string;
  vat?: string;
  gross_price?: string;
  quantity?: number;
  supplier?: string;
  received_date?: string;
  release_date?: string;
  client_id?: number;
  car_id?: number;
  worker_id?: number;
  info?: string;
}
