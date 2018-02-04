import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Car} from "../../../classes/car";
import {Service} from "../../../classes/service";

@Component({
  selector: 'app-add-services-edit',
  templateUrl: './add-services-edit.component.html',
  styleUrls: ['./add-services-edit.component.scss']
})
export class AddServicesEditComponent implements OnInit {

  @Input() private defaultName: string;
  @Input() private defaultCode: string;
  @Input() private defaultNetPrice: string;
  @Input() private defaultVat: string;
  @Input() private defaultGrossPrice: string;
  @Input() private defaultUnit: string;
  @Input() private defaultInfo: string;
  @Output() private submitForm = new EventEmitter<Service>();
  @Output() private cancelForm = new EventEmitter<void>();
  private form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: [this.defaultName, Validators.required],
      code: [this.defaultCode, Validators.required],
      netPrice: [this.defaultNetPrice],
      vat: [this.defaultVat],
      grossPrice: [this.defaultGrossPrice],
      unit: [this.defaultUnit],
      info: [this.defaultInfo]
    });
  }

  private submit() {
    this.submitForm.emit(this.form.value);
  }

  private cancel() {
    this.cancelForm.emit();
  }
}
