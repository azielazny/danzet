import {Injectable} from '@angular/core';
import {CAR_INSPECTIONS_BY_USERS} from '../resources/car-inspections-data';
import {CarInspections, CarInspectionsApi} from '../interfaces/car-inspections';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiResponse} from '../interfaces/api-response';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CarInspectionService {

  private baseUrl: string = 'http://localhost/restapi/public';
  private queryUrl: string = '?search=';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    }),
    withCredentials: true
  };

  constructor(private http: HttpClient) {
  }

  getCarsInspections(): Promise<CarInspections[]> {
    return Promise.resolve(CAR_INSPECTIONS_BY_USERS);
  }

  // getCarsInspections(): Observable<CarInspections[]> {
  //   return this.http.get<ApiResponse>(this.baseUrl + '/cars/inspections', this.httpOptions).map(x => this.convertToMultiCarInspection(x.result));
  // }

  convertToMultiCarInspection(field: CarInspectionsApi[]): CarInspections[] {
    return field.map(item => ({
      client_id: item.client_id,
      clientName: item.client_name,
      clientPhone: item.client_phone,
      oilChangeDate: item.oil_change_date,
      timingBeltChangeDate: item.timing_belt_change_date,
      technicalInspectionDate: item.technical_inspection_date,
      carBrand: item.car_brand,
      carModel: item.car_model
    }));
  }

}
