import {Component, Input, OnInit} from '@angular/core';
import {Client} from '../../classes/client';
import {ClientService} from '../../services/client.service';

@Component({
  selector: 'app-add-clients',
  templateUrl: './add-clients.component.html',
  styleUrls: ['./add-clients.component.scss']
})
export class AddClientsComponent implements OnInit {

  @Input() editedField: string;
  @Input() client: Client;

  constructor(private clientService: ClientService) {
  }

  ngOnInit(): void {
    this.getClientById();
  }

  // getClientId(evt) {
  //   this.car.client_id = evt;
  // }

  submitClient(name: Client) {
    this.client = name;
    this.resetEdit();
  }

  toggleEdit(field) {
    this.editedField = field;
  }

  resetEdit() {
    this.editedField = null;
  }

  private getClientById() {
    this.clientService.getClientById(1).then(c => this.client = c);
  }


}
