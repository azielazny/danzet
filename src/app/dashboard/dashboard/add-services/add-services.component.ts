import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Service} from '../../classes/service';
import {ServiceService} from '../../services/service.service';

@Component({
  selector: 'app-add-services',
  templateUrl: './add-services.component.html',
  styleUrls: ['./add-services.component.scss']
})
export class AddServicesComponent implements OnInit {

  @Input() private editedField: string;
  @Input() private service: Service;
  @Input() private serviceId: number;

  constructor(private serviceService: ServiceService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.serviceId = +params['serviceId'];
      this.editedField = params['editedField'];
      this.getServiceById();
    });
  }

  ngOnInit(): void {
  }

  private submitService(name: Service) {
    this.service = name;
    this.resetEdit();
  }

  private toggleEdit(field) {
    this.editedField = field;
  }

  private resetEdit() {
    this.editedField = null;
  }

  private getServiceById() {
    if (this.serviceId > 0) {
      this.serviceService.getServiceById(this.serviceId).then(c => this.service = c);
    }
  }
}
