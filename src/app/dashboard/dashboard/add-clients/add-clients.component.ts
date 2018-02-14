import {Component, Input, OnInit} from '@angular/core';
import {Client, ClientApi} from '../../interfaces/client';
import {ClientService} from '../../services/client.service';
import {ActivatedRoute, Params} from '@angular/router';
import {CarApi} from "../../interfaces/car";
import {Message} from "primeng/primeng";
import {MessageService} from "primeng/components/common/messageservice";
import {Validators} from "@angular/forms";

@Component({
  selector: 'app-add-clients',
  templateUrl: './add-clients.component.html',
  styleUrls: ['./add-clients.component.scss']
})
export class AddClientsComponent implements OnInit {

  @Input() private editedField: string;
  @Input() private client: Client;
  @Input() private clientId: number;
  msgs: Message[] = [];

  constructor(private clientService: ClientService, private activatedRoute: ActivatedRoute, private messageService: MessageService) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.clientId = +params['clientId'];
      if (this.clientId) {
        this.getClientById(this.clientId, params['editedField']);
      }
    });
  }

  ngOnInit(): void {

  }

  private submitClient(name: Client) {
    if (typeof this.client !== 'undefined') {
      this.client.firstName = name.firstName;
      this.client.lastName = name.lastName;
      this.client.zip = name.zip;
      this.client.city = name.city;
      this.client.street = name.street;
      this.client.houseNumber = name.houseNumber;
      this.client.apartmentNumber = name.apartmentNumber;
      this.client.phone = name.phone;
      this.client.email = name.email;
    } else {
      this.client = {
        firstName: name.firstName,
        lastName: name.lastName,
        zip: name.zip,
        city: name.city,
        street: name.street,
        houseNumber: name.houseNumber,
        apartmentNumber: name.apartmentNumber,
        phone: name.phone,
        email: name.email
      };
    }
    this.resetEdit();
    (this.client.client_id > 0) ? this.updateClientById() : this.insertClient();
  }

  private toggleEdit(field) {
    this.editedField = field;
  }

  private resetEdit() {
    this.editedField = null;
  }

  private getClientById(clientId: number, editedField: string) {
    this.clientService.getClientById(clientId).subscribe(c => {
      this.client = c;
      this.editedField = editedField;
    });
  }


  private updateClientById() {
    this.clientService.updateClientById(this.client).subscribe(c => {
      if (c === 'Client Updated') {
        this.msgs = [];
        this.msgs.push({severity: 'success', detail: 'Zaktualizowano dane klienta'});
      } else {
        this.msgs = [];
        this.msgs.push({severity: 'error', detail: 'Nie zaktualizowano danych klienta'});
      }
    });
  }

  private insertClient() {
    this.clientService.insertClient(this.client).subscribe(c => {
      if (c > 0) {
        this.msgs = [];
        this.msgs.push({severity: 'success', detail: 'Dodano dane klienta'});
        this.client.client_id = c;
      } else {
        this.msgs = [];
        this.msgs.push({severity: 'error', detail: 'Nie dodano danych klienta'});
      }

    });
  }
}

