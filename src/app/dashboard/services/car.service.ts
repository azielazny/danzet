import {Injectable} from '@angular/core';
import {Car} from '../classes/car';
import {CAR} from '../resources/car-data';

@Injectable()
export class CarService {

  constructor() {
  }

  getCarsList(): Promise<Car[]> {
    return Promise.resolve(CAR);
  }
}
