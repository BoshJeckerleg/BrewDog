import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Product } from '@brewdog/product-search/models/product.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromProductSearch from '../../store';

@Component({
  selector: 'app-product-search-results',
  templateUrl: './product-search-results.component.html',
  styleUrls: ['./product-search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductSearchResultsComponent implements OnInit {
  public products$: Observable<Product[]>;

  constructor(private _store: Store<fromProductSearch.ProductSearchState>) {}

  public ngOnInit(): void {
    this._connectToStore();
  }

  public trackProduct(index: number, product: Product): number {
    return product.id;
  }

  private _connectToStore(): void {
    this.products$ = this._store.select(fromProductSearch.selectProducts);
  }
}
