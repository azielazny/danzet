import {Injectable} from '@angular/core';
import {Car, CarApi, CarArray} from '../interfaces/car';
import {CAR} from '../resources/car-data';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

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

  getCarsList(): Observable<CarApi[]> {
    return this.http.get<CarArray>(this.baseUrl + '/cars', this.httpOptions).map(x => x.result);
  }

  getCarById(car_id: number): Observable<Car> {
    return this.http.get<CarArray>(this.baseUrl + '/cars/' + car_id, this.httpOptions).map(x => x.result);
  }

  getCarsByClientId(client_id: number): Promise<Car[]> {
    return Promise.resolve(CAR.filter(x => x.client_id === client_id));
  }

}
