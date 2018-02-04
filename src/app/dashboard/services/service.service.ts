import { Injectable } from '@angular/core';
import {Service} from '../classes/service';
import {SERVICE} from '../resources/service-data';

@Injectable()
export class ServiceService {

  constructor() { }

  getServicesList(): Promise<Service[]> {
  return Promise.resolve(SERVICE);
}

  getServiceById(serviceId: number) {
    return Promise.resolve(SERVICE.filter(c => c.service_id === serviceId)[0]);

  }
}
