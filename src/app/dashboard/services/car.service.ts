import {Injectable} from '@angular/core';
import {Car, CarApi, CarArray} from '../interfaces/car';
import {CAR} from '../resources/car-data';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {BaseRequestOptions, RequestOptions} from "@angular/http";

@Injectable()
export class CarService {

  private baseUrl: string = 'http://localhost/restapi/public';
  private queryUrl: string = '?search=';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) {
  }

  getCarsList(): Observable<CarArray> {
    return this.http.get<CarArray>(this.baseUrl + '/cars', this.httpOptions);
  }

  getCarById(car_id: number): Promise<Car> {
    return Promise.resolve(CAR.filter(x => x.car_id === car_id)[0]);
  }

  getCarsByClientId(client_id: number): Promise<Car[]> {
    return Promise.resolve(CAR.filter(x => x.client_id === client_id));
  }

}
