import {Component, OnInit, ViewChild} from '@angular/core';
import {ClientService} from '../../services/client.service';
import {Client} from '../../interfaces/client';

@Component({
  selector: 'app-clients-management',
  templateUrl: './clients-management.component.html',
  styleUrls: ['./clients-management.component.scss']
})
export class ClientsManagementComponent implements OnInit {

  cols: any[];
  private clients: Client[] = [];
  private stacked: boolean;

  constructor(private clientService: ClientService) {
  }

  ngOnInit() {
    this.getClientsList();
    this.cols = [
      {field: 'firstName', header: 'Imię'},
      {field: 'lastName', header: 'Nazwisko'},
      {field: 'city', header: 'Miasto'},
      {field: 'phone', header: 'Telefon'},
      {field: 'email', header: 'E-mail'}
    ];

  }

  toggle() {
    this.stacked = !this.stacked;
  }


  private getClientsList(): void {
    this.clientService.getClientList().then(c => this.clients = c);
  }

  removeClient(client_id: number) {
    // remove client
  }
}
