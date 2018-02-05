import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductEditComponent } from './add-product-edit.component';

describe('AddProductEditComponent', () => {
  let component: AddProductEditComponent;
  let fixture: ComponentFixture<AddProductEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
