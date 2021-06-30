import { ProductSearchSort } from '../models/product-search-sort.enum';
import { Product } from '../models/product.interface';

export function sortProducts(products: Product[], sort: ProductSearchSort): Product[] {
  if (sort === ProductSearchSort.AbvAscending) {
    return products.slice().sort((a: Product, b: Product) => {
      if (a.abv < b.abv) {
        return -1;
      } else if (a.abv > b.abv) {
        return 1;
      }
      return 0;
    });
  } else if (sort === ProductSearchSort.AbvDescending) {
    return products.slice().sort((a: Product, b: Product) => {
      if (a.abv > b.abv) {
        return -1;
      } else if (a.abv < b.abv) {
        return 1;
      }
      return 0;
    });
  }
  return products;
}
