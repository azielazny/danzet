import {Injectable} from '@angular/core';
import {Car} from '../interfaces/car';
import {CAR} from '../resources/car-data';

@Injectable()
export class CarService {

  constructor() {
  }

  getCarsList(): Promise<Car[]> {
    return Promise.resolve(CAR);
  }

  getCarById(car_id: number): Promise<Car> {
    return Promise.resolve(CAR.filter(x => x.car_id === car_id)[0]);
  }

  getCarsByClientId(client_id: number): Promise<Car[]> {
    return Promise.resolve(CAR.filter(x => x.client_id === client_id));
  }
}
