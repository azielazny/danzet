import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DataTableDirective} from "angular-datatables";
import {CarService} from "../../services/car.service";
import {Car} from "../../classes/car";
import {Service} from "../../classes/service";
import {ServiceService} from "../../services/service.service";

@Component({
  selector: 'app-services-management',
  templateUrl: './services-management.component.html',
  styleUrls: ['./services-management.component.scss']
})
export class ServicesManagementComponent implements OnInit, AfterViewInit {

  @ViewChild(DataTableDirective)
  private datatableElement: DataTableDirective;

  private dtOptions: DataTables.Settings = {};

  private services: Service[] = [];

  constructor(private serviceService: ServiceService) {
  }

  ngOnInit() {
    this.getServicesList();

    this.dtOptions = {

      columns: [
        {
          data: 'name'
        },
        {
          data: 'code'
        },
        {
          data: 'netPrice'
        },
        {
          data: 'vat'
        },
        {
          data: 'grossPrice'
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


  private getServicesList(): void {
    this.serviceService.getServicesList().then(c => this.services = c);
  }
  private removeCar(carId:number) {
    //usunięcie samochodu z listy
  }
}

