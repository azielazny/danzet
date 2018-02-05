import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductEdit2Component } from './add-product-edit2.component';

describe('AddProductEdit2Component', () => {
  let component: AddProductEdit2Component;
  let fixture: ComponentFixture<AddProductEdit2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductEdit2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductEdit2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
