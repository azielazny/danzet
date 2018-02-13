import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Service} from '../../interfaces/service';
import {ServiceService} from '../../services/service.service';

@Component({
  selector: 'app-services-management',
  templateUrl: './services-management.component.html',
  styleUrls: ['./services-management.component.scss']
})
export class ServicesManagementComponent implements OnInit {

  cols: any[];
  private services: Service[] = [];
  private stacked: boolean;

  constructor(private serviceService: ServiceService) {
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
    this.serviceService.getServicesList().then(c => this.services = c);
  }

  private removeService(carId: number) {
    // usunięcie samochodu z listy
  }
}

