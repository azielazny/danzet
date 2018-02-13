export interface Car {
  car_id: number;
  brand: string; // MarkaPojazdu;
  model: string; //  ModelPojazdu;
  productionYear?: number;
  vin?: string;
  registrationNumber?: string; // NrRejestracyjny:string;
  registrationDate?: string;
  carVersion?: string;
  capacity?: string; // Pojemnosc
  enginePower?: string; // moc silnika
  fuel?: string; // RodzajPaliwa
  drSeries?: string; // seria dowodu rejestracyjnego
  course?: string; // przebieg
  dateAdded?: string; //data dodania
  info?: string; //dodatkowe info
  client_id?: number;
  modificationDate?:string;
}
