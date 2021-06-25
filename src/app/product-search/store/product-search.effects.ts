import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ProductSearchService } from '../services/product-search/product-search.service';
import * as fromProductSearch from '../store';

@Injectable()
export class ProductSearchEffects {
  constructor(
    private _actions: Actions,
    private _store: Store<fromProductSearch.ProductSearchState>,
    private _productSearchService: ProductSearchService
  ) {}
}
