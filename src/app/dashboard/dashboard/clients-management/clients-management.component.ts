import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DataTableDirective} from 'angular-datatables';
import {ClientService} from '../../services/client.service';
import {Client} from '../../classes/client';

@Component({
  selector: 'app-clients-management',
  templateUrl: './clients-management.component.html',
  styleUrls: ['./clients-management.component.scss']
})
export class ClientsManagementComponent implements OnInit, AfterViewInit {

  @ViewChild(DataTableDirective)
  private datatableElement: DataTableDirective;

  private dtOptions: DataTables.Settings = {};

  private clients: Client[] = [];

  constructor(private clientService: ClientService) {
  }

  ngOnInit() {
    this.getClientsList();

    this.dtOptions = {

      columns: [
        {
          data: 'firstName'
        },
        {
          data: 'lastName'
        },
        {
          data: 'city'
        },
        {
          data: 'phone'
        },
        {
          data: 'email'
        },
        {
          orderable: false
        }
      ]
    };


  }

  ngAfterViewInit(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns().every(function () {
        const that = this;
        $('input', this.footer()).on('keyup change', function () {
          if (that.search() !== this['value']) {
            that
              .search(this['value'])
              .draw();
          }
        });
      });
    });
  }


  private getClientsList(): void {
    this.clientService.getClientList().then(c => this.clients = c);
  }
}
