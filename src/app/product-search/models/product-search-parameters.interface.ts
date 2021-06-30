import { ProductSearchSort } from './product-search-sort.enum';

export interface ProductSearchParameters {
  beerName?: string;
  sort: ProductSearchSort;
}
