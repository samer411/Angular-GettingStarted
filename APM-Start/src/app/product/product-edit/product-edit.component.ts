import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct, ProductResolved } from '../product';

@Component({
  selector: 'pm-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  errorMessage = '';
  product?: IProduct;
  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      const resolvedData: ProductResolved =
        this.route.snapshot.data['resolvedData'];
      this.errorMessage = resolvedData.error;
    });
  }
}
