import {Injectable} from '@angular/core';
import {Client, ClientArray} from '../classes/client';
import {CLIENT} from '../resources/client-data';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ClientService {

  baseUrl: string = 'https://api.cdnjs.com/libraries';
  queryUrl: string = '?search=';

  constructor(private http: HttpClient) {
  }

  search(terms: Observable<string>): Observable<ClientArray> {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap((term) => this.searchEntries(term));
  }

  searchEntries(term) {
    if (term.length === 0) {
      return null;
    }
    return this.http.get<ClientArray>(this.baseUrl + this.queryUrl + term);
  }

  getClientList(): Promise<Client[]> {
    return Promise.resolve(CLIENT);
  }

  getClientById(client_id: number): Promise<Client> {
    return Promise.resolve(CLIENT.filter(c => c.client_id === client_id)[0]);
  }


}
