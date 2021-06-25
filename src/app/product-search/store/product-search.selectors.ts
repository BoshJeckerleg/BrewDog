import { createFeatureSelector } from '@ngrx/store';
import { featureKey, ProductSearchState } from './product-search.reducer';

export const selectProductSearchState = createFeatureSelector<ProductSearchState>(featureKey);
