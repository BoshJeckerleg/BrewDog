import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductSearchDisplay as ProductSearchDisplay } from '../models/product-search-display.enum';
import { ProductSearchParameters } from '../models/product-search-parameters.interface';
import { Product } from '../models/product.interface';
import { featureKey, ProductSearchState } from './product-search.reducer';

export const selectProductSearchState = createFeatureSelector<ProductSearchState>(featureKey);

export const selectProducts = createSelector(selectProductSearchState, (state: ProductSearchState): Product[] => {
  return state.products;
});

export const selectProductSearching = createSelector(
  selectProductSearchState,
  (state: ProductSearchState): boolean => state.searching
);

export const selectProductSearchParameters = createSelector(
  selectProductSearchState,
  (state: ProductSearchState): ProductSearchParameters => state.searchParameters
);

export const selectProductSearchDisplay = createSelector(
  selectProductSearchState,
  (state: ProductSearchState): ProductSearchDisplay => state.display
);
