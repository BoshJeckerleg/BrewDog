import { ActionReducer, createReducer, on } from '@ngrx/store';
import { ProductSearchParameters } from '../models/product-search-parameters.interface';
import { ProductSearchSort } from '../models/product-search-sort.enum';
import { Product } from '../models/product.interface';
import * as Actions from './product-search.actions';

export const featureKey = 'brewdog.product-search';

export class ProductSearchState {
  readonly products: Product[] = [];
  readonly searching: boolean = false;
  readonly searchParameters: ProductSearchParameters = { sort: ProductSearchSort.Default };
}

export const reducer: ActionReducer<ProductSearchState> = createReducer(
  new ProductSearchState(),
  on(Actions.productSearch, (state: ProductSearchState): ProductSearchState => {
    return {
      ...state,
      searching: true
    };
  }),
  on(Actions.productSearchSuccess, (state: ProductSearchState, action: { products: Product[] }): ProductSearchState => {
    return {
      ...state,
      searching: false,
      products: action.products
    };
  }),
  on(Actions.productSearchFailure, (state: ProductSearchState): ProductSearchState => {
    return {
      ...state,
      searching: false
    };
  }),
  on(
    Actions.updateProductSearchParameters,
    (state: ProductSearchState, action: { searchParameters: ProductSearchParameters }): ProductSearchState => {
      return {
        ...state,
        searchParameters: action.searchParameters
      };
    }
  )
);
