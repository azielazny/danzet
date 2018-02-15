import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Service} from '../../interfaces/service';
import {ServiceService} from '../../services/service.service';
import {Message} from "primeng/primeng";
import {MessageService} from "primeng/components/common/messageservice";

@Component({
  selector: 'app-services-management',
  templateUrl: './services-management.component.html',
  styleUrls: ['./services-management.component.scss']
})
export class ServicesManagementComponent implements OnInit {

  cols: any[];
  private services: Service[] = [];
  private stacked: boolean;
  msgs: Message[] = [];

  constructor(private serviceService: ServiceService, private messageService: MessageService) {
  }

  private clear() {
    this.messageService.clear();
  }

  ngOnInit() {
    this.getServicesList();

    this.cols = [
      {field: 'name', header: 'Nazwa'},
      {field: 'code', header: 'Kod'},
      {field: 'netPrice', header: 'Cena netto'},
      {field: 'vat', header: 'VAT'},
      {field: 'grossPrice', header: 'Cena brutto'}
    ];
  }

  toggle() {
    this.stacked = !this.stacked;
  }

  private getServicesList(): void {
    this.serviceService.getServicesList().subscribe(c => this.services = c);
  }

  private removeService(serviceId: number) {
    this.serviceService.removeServiceById(serviceId).subscribe(c => {
      if (c === 'Service Deleted') {
        this.msgs = [];
        this.msgs.push({severity: 'success', detail: 'Usunięto usługę'});
        this.services = this.services.filter((val, i) => val.service_id !== serviceId);
      } else {
        this.msgs = [];
        this.msgs.push({severity: 'error', detail: 'Nie usunięto usługi'});
      }
    });
  }

  private refreshTable() {
    this.getServicesList();
  }
}

