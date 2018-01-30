import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Car} from '../../classes/car';

@Component({
  selector: 'app-add-cars',
  templateUrl: './add-cars.component.html',
  styleUrls: ['./add-cars.component.scss']
})
export class AddCarsComponent implements OnInit {


  // @Input() profile: Car;
  // @Input() editedField: string;
  // @Output() changeEditedField = new EventEmitter<string>();
  //
  // submitName(name: Car) {
  // }
  //
  // toggleEdit(field) {
  //   this.changeEditedField.emit(field);
  // }
  //
  // resetEdit() {
  //   this.changeEditedField.emit(null);
  // }

  ngOnInit(): void {
  }
}
