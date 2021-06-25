import { ActionReducer, createReducer, on } from '@ngrx/store';
import * as Actions from './product-search.actions';

export const featureKey = 'brewdog.product-search';

export class ProductSearchState {
  readonly searchResults = [];
}

export const reducer: ActionReducer<ProductSearchState> = createReducer(
  new ProductSearchState(),
  on(Actions.productSearch, (state: ProductSearchState): ProductSearchState => {
    return {
      ...state
    };
  })
);
