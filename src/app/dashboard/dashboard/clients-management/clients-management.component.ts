import {Component, OnInit, ViewChild} from '@angular/core';
import {ClientService} from '../../services/client.service';
import {Client, ClientApi} from '../../interfaces/client';
import {Car, CarApi} from "../../interfaces/car";
import {MessageService} from "primeng/components/common/messageservice";
import {Message} from "primeng/primeng";

@Component({
  selector: 'app-clients-management',
  templateUrl: './clients-management.component.html',
  styleUrls: ['./clients-management.component.scss']
})
export class ClientsManagementComponent implements OnInit {

  cols: any[];
  private clients: Client[] = [];
  private stacked: boolean;
  msgs: Message[] = [];

  constructor(private clientService: ClientService, private messageService: MessageService) {
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


  removeClient(client_id: number) {
    this.clientService.removeClientById(client_id).subscribe(c => {
      if (c === 'Client Deleted') {
        this.msgs = [];
        this.msgs.push({severity: 'success', detail: 'Usunięto klienta'});
        this.clients = this.clients.filter((val, i) => val.client_id !== client_id);
      } else {
        this.msgs = [];
        this.msgs.push({severity: 'error', detail: 'Nie usunięto klienta'});
      }
    });
  }

  private clear() {
    this.messageService.clear();
  }

  private toggle() {
    this.stacked = !this.stacked;
  }

  private getClientsList(): void {
    this.clientService.getClientList().subscribe(x =>
      this.clients = x
    );

  }

  private refreshTable() {
    this.getClientsList();
  }
}
