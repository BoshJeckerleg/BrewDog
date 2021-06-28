import { ProductSearchSort } from './product-search-sort.enum';

export interface ProductSearchParameters {
  tagline?: string;
  sort: ProductSearchSort;
}
