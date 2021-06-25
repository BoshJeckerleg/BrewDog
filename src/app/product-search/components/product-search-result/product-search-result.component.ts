import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-product-search-result',
  templateUrl: './product-search-result.component.html',
  styleUrls: ['./product-search-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductSearchResultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
