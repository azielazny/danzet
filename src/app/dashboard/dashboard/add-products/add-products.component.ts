import {Component, Input, OnInit} from '@angular/core';
import {ServiceService} from "../../services/service.service";
import {Service} from "../../classes/service";
import {ActivatedRoute, Params} from "@angular/router";
import {Product} from "../../classes/product";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {

  @Input() private editedField: string;
  @Input() private product: Product;
  @Input() private productId: number;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.productId = +params['productId'];
      this.editedField = params['editedField'];
      this.getProductById();
    });
  }

  ngOnInit(): void {
  }

  private submitProduct(name: Product) {
    this.product = name;
    this.resetEdit();
  }

  private toggleEdit(field) {
    this.editedField = field;
  }

  private resetEdit() {
    this.editedField = null;
  }

  private getProductById() {
    if (this.productId > 0) {
      this.productService.getProductById(this.productId).then(c => this.product = c);
    }
  }
}
