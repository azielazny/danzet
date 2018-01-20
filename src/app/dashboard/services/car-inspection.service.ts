import {Injectable} from '@angular/core';
import {CAR_INSPECTIONS_BY_USERS} from '../resources/car-inspections-data';
import {CarInspections} from '../classes/car-inspections';

@Injectable()
export class CarInspectionService {

  constructor() {
  }

  getCarsInspections(): Promise<CarInspections[]> {
    return Promise.resolve(CAR_INSPECTIONS_BY_USERS);
  }
}
