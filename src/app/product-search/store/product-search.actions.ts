import { createAction } from '@ngrx/store';

export const productSearch = createAction('[Product Search] Search - Request');

export const productSearchSuccess = createAction('[Product Search] Search - Success');

export const productSearchFailure = createAction('[Product Search] Search - Failure');
