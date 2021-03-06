import {Component, EventEmitter, Input, OnInit, Output, Pipe, PipeTransform} from '@angular/core';
import {ClientService} from '../../../services/client.service';
import {Client} from '../../../interfaces/client';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-add-cars-client-search',
  templateUrl: './add-cars-client-search.component.html',
  styleUrls: ['./add-cars-client-search.component.scss']
})


export class AddCarsClientSearchComponent implements OnInit {

  private client: Client;
  @Output() selectedClient = new EventEmitter<number>();
  private clientsList: Client[];
  private searchTerm = new Subject<string>();

  @Input()
  public set clientNumber(clientNr: number) {
    if (clientNr > 0) {
      this.getClientById(clientNr);
    }
  }

  constructor(private clientService: ClientService) {
    this.getClientByString();
  }

  ngOnInit() {
  }

  private getClientById(clientId: number) {
    this.clientService.getClientById(clientId).subscribe(c => this.client = c);
    // this.clientService.getClientById(client_id).then(c => this.client = c);
  }

  private getClientByString() {
    this.clientService.search(this.searchTerm).subscribe(r => {
      this.clientsList = r;
    });
  }

  private choiceClient(client_id: number) {
    this.clientsList = [];
    this.selectedClient.emit(client_id);
  }
}
