import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Service} from '../../interfaces/service';
import {ServiceService} from '../../services/service.service';
import {Message} from 'primeng/primeng';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-add-services',
  templateUrl: './add-services.component.html',
  styleUrls: ['./add-services.component.scss']
})
export class AddServicesComponent implements OnInit {

  @Input() private editedField: string;
  @Input() private service: Service;
  @Input() private serviceId: number;
  msgs: Message[] = [];

  constructor(private serviceService: ServiceService, private activatedRoute: ActivatedRoute, private messageService: MessageService) {
    this.activatedRoute.params.subscribe((params: Params) => {
      // this.serviceId = +params['serviceId'];
      if (params['serviceId']) {
        this.getServiceById(+params['serviceId'], params['editedField']);
      }
    });
  }

  ngOnInit(): void {
  }

  private submitService(item: Service) {
    if (typeof this.service !== 'undefined') {
      this.service.name = item.name;
      this.service.code = item.code;
      this.service.netPrice = item.netPrice;
      this.service.vat = item.vat;
      this.service.grossPrice = item.grossPrice;
      this.service.info = item.info;
      this.service.unit = item.unit;
      this.service.modificationDate = item.modificationDate;
    } else {
      this.service = {
        service_id: item.service_id,
        name: item.name,
        code: item.code,
        netPrice: item.netPrice,
        vat: item.vat,
        grossPrice: item.grossPrice,
        info: item.info,
        unit: item.unit,
        modificationDate: item.modificationDate
      };
    }
    this.resetEdit();
    (this.service.service_id > 0) ? this.updateServiceById() : this.insertService();
  }

  private toggleEdit(field) {
    this.editedField = field;
  }

  private resetEdit() {
    this.editedField = null;
  }

  private getServiceById(serviceId: number, editedField: string) {
    if (serviceId > 0) {
      this.serviceService.getServiceById(serviceId).subscribe(c => {
        this.service = c;
        this.editedField = editedField;
        this.serviceId = serviceId;
      });
    }
  }

  private updateServiceById() {
    this.serviceService.updateServiceById(this.service).subscribe(c => {
      if (c === 'Service Updated') {
        this.msgs = [];
        this.msgs.push({severity: 'success', detail: 'Zaktualizowano dane usługi'});
      } else {
        this.msgs = [];
        this.msgs.push({severity: 'error', detail: 'Nie zaktualizowano danych usługi'});
      }
    });
  }

  private insertService() {
    this.serviceService.insertService(this.service).subscribe(c => {
      if (c > 0) {
        this.msgs = [];
        this.msgs.push({severity: 'success', detail: 'Dodano dane usługi'});
        this.service.service_id = c;
      } else {
        this.msgs = [];
        this.msgs.push({severity: 'error', detail: 'Nie dodano danych usługi'});
      }

    });
  }
}
