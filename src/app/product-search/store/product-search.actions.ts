import { createAction, props } from '@ngrx/store';
import { ProductSearchParameters } from '../models/product-search-parameters.interface';
import { Product } from '../models/product.interface';

export const productSearch = createAction('[Product Search] Search - Request');

export const productSearchSuccess = createAction('[Product Search] Search - Success', props<{ products: Product[] }>());

export const productSearchFailure = createAction('[Product Search] Search - Failure');

export const updateProductSearchParameters = createAction(
  '[Product Search] Update Search Parameters',
  props<{ searchParameters: ProductSearchParameters }>()
);
