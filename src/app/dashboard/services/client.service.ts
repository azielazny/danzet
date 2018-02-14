import {Injectable} from '@angular/core';
import {Client, ClientApi} from '../interfaces/client';
import {CLIENT} from '../resources/client-data';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ApiResponse} from "../interfaces/api-response";
import {Car, CarApi} from "../interfaces/car";
import {CAR} from "../resources/car-data";

@Injectable()
export class ClientService {

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

  search(terms: Observable<string>): Observable<Client[]> {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap((term) => this.searchEntries(term)).map(x => x.result);
  }

  searchEntries(term) {
    if (term.length === 0) {
      return null;
    }
    return this.http.get<ApiResponse>(this.baseUrl + this.queryUrl + term);
  }

  getClientList(): Observable<ClientApi[]> {
    return this.http.get<ApiResponse>(this.baseUrl + '/clients', this.httpOptions).map(x => x.result);
  }

  // getClientById(client_id: number): Promise<Client> {
  //   return Promise.resolve(CLIENT.filter(c => c.client_id === client_id)[0]);
  // }

  getClientById(clientId: number): Observable<ClientApi> {
    return this.http.get<ApiResponse>(this.baseUrl + '/clients/' + clientId, this.httpOptions).map(x => x.result);
  }

  getClientsByCarId(car_id: number): Promise<Car[]> {
    return Promise.resolve(CAR.filter(x => x.car_id === car_id));
  }

  updateClientById(clientData: Client): Observable<string> {
    return this.http.put<ApiResponse>(this.baseUrl + '/clients/' + clientData.client_id,
      JSON.stringify(this.convertToClientApi(clientData)), this.httpOptions).map(res => res.status);
  }

  insertClient(clientData: Client): Observable<number> {
    return this.http.post<ApiResponse>(this.baseUrl + '/clients', JSON.stringify(this.convertToClientApi(clientData)),
      this.httpOptions).map(x => x.id);
  }

  removeClientById(clientId: number): Observable<string> {
    return this.http.delete<ApiResponse>(this.baseUrl + '/clients/' + clientId, this.httpOptions).map(res => res.status);
  }

  private convertToClientApi(item: Client): ClientApi {
    return {
      client_id: item.client_id,
      firstname: item.firstName,
      lastname: item.lastName,
      zip: item.zip,
      city: item.city,
      street: item.street,
      house_number: item.houseNumber,
      apartment_number: item.apartmentNumber,
      phone: item.phone,
      email: item.email,
      company: item.company,
      nip: item.nip,
      modification_date: item.modificationDate
    };
  }
}
