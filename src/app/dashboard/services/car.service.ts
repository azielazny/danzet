import {Injectable} from '@angular/core';
import {Car, CarApi} from '../interfaces/car';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ApiResponse} from '../interfaces/api-response';

@Injectable()
export class CarService {

  private baseUrl: string = 'http://localhost/restapi/public';
  private queryUrl: string = '?search=';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    }),
    // params: _params,
    withCredentials: true
  };

  constructor(private http: HttpClient) {
  }

  getCarsList(): Observable<Car[]> {
    return this.http.get<ApiResponse>(this.baseUrl + '/cars', this.httpOptions).map(x => this.convertToMultiCar(x.result));
  }

  getCarById(car_id: number): Observable<Car> {
    return this.http.get<ApiResponse>(this.baseUrl + '/cars/' + car_id, this.httpOptions).map(x => this.convertToCar(x.result));
  }

  getCarsByClientId(client_id: number): Observable<Car[]> {
    return this.http.get<ApiResponse>(this.baseUrl + '/cars/client/' + client_id, this.httpOptions)
      .map(x => this.convertToMultiCar(x.result));
  }

  updateCarById(car: Car): Observable<string> {
    return this.http.put<ApiResponse>(this.baseUrl + '/cars/' + car.car_id, JSON.stringify(this.convertToCarApi(car)),
      this.httpOptions).map(res => res.status);
  }

  insertCar(car: Car): Observable<number> {
    return this.http.post<ApiResponse>(this.baseUrl + '/cars', JSON.stringify(this.convertToCarApi(car)), this.httpOptions).map(x => x.id);
  }

  removeCarById(carId: number): Observable<string> {
    return this.http.delete<ApiResponse>(this.baseUrl + '/cars/' + carId, this.httpOptions).map(res => res.status);
  }

  private convertToCarApi(item: Car): CarApi {
    return {
      car_id: item.car_id,
      brand: item.brand,
      model: item.model,
      production_year: item.productionYear,
      vin: item.vin,
      registration_number: item.registrationNumber,
      registration_date: item.registrationDate,
      car_version: item.carVersion,
      capacity: item.capacity,
      engine_power: item.enginePower,
      fuel: item.fuel,
      dr_series: item.drSeries,
      course: item.course,
      date_added: item.dateAdded,
      info: item.info,
      client_id: item.client_id,
      modification_date: item.modificationDate
    };
  }

  private convertToMultiCar(field: CarApi[]): Car[] {
    return field.map(item => ({
      car_id: item.car_id,
      brand: item.brand,
      model: item.model,
      productionYear: item.production_year,
      vin: item.vin,
      registrationNumber: item.registration_number,
      registrationDate: item.registration_date,
      carVersion: item.car_version,
      capacity: item.capacity,
      enginePower: item.engine_power,
      fuel: item.fuel,
      drSeries: item.dr_series,
      course: item.course,
      dateAdded: item.date_added,
      info: item.info,
      client_id: item.client_id,
      modificationDate: item.modification_date
    }));
  }

  private convertToCar(item: CarApi) {
    return {
      car_id: item.car_id,
      brand: item.brand,
      model: item.model,
      productionYear: item.production_year,
      vin: item.vin,
      registrationNumber: item.registration_number,
      registrationDate: item.registration_date,
      carVersion: item.car_version,
      capacity: item.capacity,
      enginePower: item.engine_power,
      fuel: item.fuel,
      drSeries: item.dr_series,
      course: item.course,
      dateAdded: item.date_added,
      info: item.info,
      client_id: item.client_id,
      modificationDate: item.modification_date
    };
  }
}
