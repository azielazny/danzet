export interface Client {
  client_id?: number; // temporary is optional
  firstName?: string; // temporary is optional
  lastName?: string;
  zip?: string;
  city?: string;
  street?: string;
  houseNumber?: number;
  apartmentNumber?: number;
  phone?: string;
  email?: string;
  modificationDate?: string;
  company?: string;
  nip?: string;

  name?: string; // temporary to test
  latest?: string; // temporary to test
}

export interface ClientApi {
  client_id: number;
  firstname: string;
  lastname: string;
  zip: string;
  city: string;
  street: string;
  house_number: number;
  apartment_number: number;
  phone: string;
  email: string;
  modification_date: string;
  company: string;
  nip: string;
}
