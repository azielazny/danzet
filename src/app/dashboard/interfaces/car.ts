import {Client} from "./client";

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
  modificationDate?: string;
}

export interface CarApi {
  car_id: number;
  brand: string;
  model: string;
  production_year?: number;
  vin?: string;
  registration_number?: string;
  registration_date?: string;
  car_version?: string;
  capacity?: string;
  engine_power?: string;
  fuel?: string;
  dr_series?: string;
  course?: string;
  date_added?: string;
  info?: string;
  client_id?: number;
  modification_date?: string;
}

export interface CarArray {
  result: Array<Car>;
  status: boolean | number;
}
