import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, debounceTime, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { ProductSearchParameters } from '../models/product-search-parameters.interface';
import { Product } from '../models/product.interface';
import { ProductSearchService } from '../services/product-search/product-search.service';
import * as fromProductSearch from '../store';

@Injectable()
export class ProductSearchEffects {
  constructor(
    private _actions: Actions,
    private _store: Store<fromProductSearch.ProductSearchState>,
    private _productSearchService: ProductSearchService
  ) {}

  public requestProductSearch: Observable<Action> = createEffect(() =>
    this._actions.pipe(
      ofType(fromProductSearch.updateProductSearchParameters),
      debounceTime(500),
      map(() => fromProductSearch.productSearch())
    )
  );

  public productSearch: Observable<Action> = createEffect(() =>
    this._actions.pipe(
      ofType(fromProductSearch.productSearch),
      withLatestFrom(this._store.select(fromProductSearch.selectProductSearchParameters)),
      switchMap(([action, searchParameters]: [Action, ProductSearchParameters]) =>
        this._productSearchService.searchProducts(searchParameters).pipe(
          map((products: Product[]) => fromProductSearch.productSearchSuccess({ products })),
          catchError(() => of(fromProductSearch.productSearchFailure()))
        )
      )
    )
  );
}
