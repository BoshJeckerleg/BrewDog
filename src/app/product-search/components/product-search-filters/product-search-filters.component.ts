import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-product-search-filters',
  templateUrl: './product-search-filters.component.html',
  styleUrls: ['./product-search-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductSearchFiltersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
