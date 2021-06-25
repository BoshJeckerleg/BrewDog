import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Product } from '@brewdog/product-search/models/product.interface';

@Component({
  selector: 'app-product-search-result',
  templateUrl: './product-search-result.component.html',
  styleUrls: ['./product-search-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductSearchResultComponent implements OnInit {
  @Input() public product: Product;

  constructor() {}

  ngOnInit(): void {}
}
