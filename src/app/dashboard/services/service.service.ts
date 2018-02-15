import {Injectable} from '@angular/core';
import {Service, ServiceApi} from '../interfaces/service';
import {SERVICE} from '../resources/service-data';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Client, ClientApi} from '../interfaces/client';
import {Observable} from 'rxjs/Observable';
import {ApiResponse} from '../interfaces/api-response';

@Injectable()
export class ServiceService {

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

  getServicesList(): Observable<Service[]> {
    return this.http.get<ApiResponse>(this.baseUrl + '/services', this.httpOptions).map(x => this.convertToMultiService(x.result));
  }

  // getServicesList(): Promise<Service[]> {
  //   return Promise.resolve(SERVICE);
  // }

  getServiceById(serviceId: number): Observable<Service> {
    return this.http.get<ApiResponse>(this.baseUrl + '/services/' + serviceId, this.httpOptions).map(x => this.convertToService(x.result));
  }
  //
  // getServiceById(serviceId: number) {
  //   return Promise.resolve(SERVICE.filter(c => c.service_id === serviceId)[0]);
  // }


  updateServiceById(serviceData: Service): Observable<string> {
    return this.http.put<ApiResponse>(this.baseUrl + '/services/' + serviceData.service_id,
      JSON.stringify(this.convertToServiceApi(serviceData)), this.httpOptions).map(res => res.status);
  }

  insertService(serviceData: Service): Observable<number> {
    return this.http.post<ApiResponse>(this.baseUrl + '/services', JSON.stringify(this.convertToServiceApi(serviceData)),
      this.httpOptions).map(x => x.id);
  }

  removeServiceById(serviceId: number): Observable<string> {
    return this.http.delete<ApiResponse>(this.baseUrl + '/services/' + serviceId, this.httpOptions).map(res => res.status);
  }

  convertToMultiService(field: ServiceApi[]): Service[] {
    return field.map(item => ({
      service_id: item.service_id,
      name: item.name,
      code: item.code,
      netPrice: item.net_price,
      vat: item.vat,
      grossPrice: item.gross_price,
      info: item.info,
      unit: item.unit,
      modificationDate: item.modification_date
    }));
  }

  private convertToServiceApi(item: Service): ServiceApi {
    return {
      service_id: item.service_id,
      name: item.name,
      code: item.code,
      net_price: item.netPrice,
      vat: item.vat,
      gross_price: item.grossPrice,
      info: item.info,
      unit: item.unit,
      modification_date: item.modificationDate
    };
  }

  private convertToService(item: ServiceApi) {
    return {
      service_id: item.service_id,
      name: item.name,
      code: item.code,
      netPrice: item.net_price,
      vat: item.vat,
      grossPrice: item.gross_price,
      info: item.info,
      unit: item.unit,
      modificationDate: item.modification_date
    };
  }
}
