import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductSearchParameters } from '../models/product-search-parameters.interface';
import { ProductSearchSort } from '../models/product-search-sort.enum';
import { Product } from '../models/product.interface';
import { featureKey, ProductSearchState } from './product-search.reducer';

export const selectProductSearchState = createFeatureSelector<ProductSearchState>(featureKey);

export const selectProducts = createSelector(selectProductSearchState, (state: ProductSearchState): Product[] => {
  if (state.searchParameters.sort === ProductSearchSort.Default) {
    return state.products;
  } else if (state.searchParameters.sort === ProductSearchSort.AbvAscending) {
    return state.products.sort((a: Product, b: Product) => {
      if (a.abv < b.abv) {
        return -1;
      } else if (a.abv > b.abv) {
        return 1;
      }
      return 0;
    });
  } else if (state.searchParameters.sort === ProductSearchSort.AbvDescending) {
    return state.products.sort((a: Product, b: Product) => {
      if (a.abv > b.abv) {
        return -1;
      } else if (a.abv < b.abv) {
        return 1;
      }
      return 0;
    });
  }
});

export const selectProductSearching = createSelector(
  selectProductSearchState,
  (state: ProductSearchState): boolean => state.searching
);

export const selectProductSearchParameters = createSelector(
  selectProductSearchState,
  (state: ProductSearchState): ProductSearchParameters => state.searchParameters
);
