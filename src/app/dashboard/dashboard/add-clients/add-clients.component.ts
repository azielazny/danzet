import {Component, Input, OnInit} from '@angular/core';
import {Client} from '../../interfaces/client';
import {ClientService} from '../../services/client.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-add-clients',
  templateUrl: './add-clients.component.html',
  styleUrls: ['./add-clients.component.scss']
})
export class AddClientsComponent implements OnInit {

  @Input() private editedField: string;
  @Input() private client: Client;
  @Input() private clientId: number;

  constructor(private clientService: ClientService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.clientId = +params['clientId'];
      this.editedField = params['editedField'];
      this.getClientById();
    });
  }

  ngOnInit(): void {

  }


  private submitClient(name: Client) {
    this.client = name;
    this.resetEdit();
  }

  private toggleEdit(field) {
    this.editedField = field;
  }

  private resetEdit() {
    this.editedField = null;
  }

  private getClientById() {
    if (this.clientId > 0) { this.clientService.getClientById(this.clientId).then(c => this.client = c); }
  }


}
