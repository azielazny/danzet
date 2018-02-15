export interface Service {
  service_id?: number;
  name?: string;
  code?: string;
  netPrice?: string;
  vat?: number;
  grossPrice?: string;
  info?: string;
  unit?: string;
  modificationDate?: string;
}

export interface ServiceApi {
  service_id?: number;
  name?: string;
  code?: string;
  net_price?: string;
  vat?: number;
  gross_price?: string;
  info?: string;
  unit?: string;
  modification_date?: string;
}
