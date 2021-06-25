import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
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

  public productSearch: Observable<Action> = createEffect(() =>
    this._actions.pipe(
      ofType(fromProductSearch.productSearch),
      switchMap(() =>
        this._productSearchService.searchProducts().pipe(
          map((products: Product[]) => fromProductSearch.productSearchSuccess({ products })),
          catchError(() => of(fromProductSearch.productSearchFailure()))
        )
      )
    )
  );
}
