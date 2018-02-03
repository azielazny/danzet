export class Client {
  client_id?: number;//temporary is optional
  firstName?: string;//temporary is optional
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
  nip?:string;

  name?: string; //temporary to test
  latest?: string; //temporary to test
}


export class ClientArray {
  results: Array<Client>;
  total: number;
}
