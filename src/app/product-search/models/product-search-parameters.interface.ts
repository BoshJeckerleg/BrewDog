import { ProductSearchSort } from './product-search-sort.enum';

export interface ProductSearchParameters {
  productName?: string;
  sort: ProductSearchSort;
}
