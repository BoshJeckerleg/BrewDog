import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { ProductSearchParameters } from '@brewdog/product-search/models/product-search-parameters.interface';
import { ProductSearchSort } from '@brewdog/product-search/models/product-search-sort.enum';
import { Product } from '@brewdog/product-search/models/product.interface';
import { httpParametersFromObject } from '@brewdog/shared';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductSearchService implements OnDestroy {
  private _products$: BehaviorSubject<Product[]> = new BehaviorSubject(undefined);
  private _destroyed$: ReplaySubject<void> = new ReplaySubject();

  constructor(private _http: HttpClient) {
    this._fetchAllProducts();
  }

  public ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  public searchProducts(searchParameters: ProductSearchParameters): Observable<Product[]> {
    return this._products$.pipe(
      map((products: Product[]) => {
        const tagline: string = searchParameters?.tagline?.toLowerCase().trim();
        const filteredProducts: Product[] = products
          .slice()
          .filter((product: Product) => !tagline || product.tagline?.toLowerCase().includes(tagline));

        if (searchParameters.sort === ProductSearchSort.AbvAscending) {
          return filteredProducts.sort((a: Product, b: Product) => {
            if (a.abv < b.abv) {
              return -1;
            } else if (a.abv > b.abv) {
              return 1;
            }
            return 0;
          });
        } else if (searchParameters.sort === ProductSearchSort.AbvDescending) {
          return filteredProducts.sort((a: Product, b: Product) => {
            if (a.abv > b.abv) {
              return -1;
            } else if (a.abv < b.abv) {
              return 1;
            }
            return 0;
          });
        }
        return filteredProducts;
      })
    );
  }

  /**
   * Ordinarily this would not happen, each parameter change would kick off another API request so the filtering
   * could be done on the back end.  Requirements are to filter by a property that is not a parameter on the api
   * and to sort the results when the api provides no sort.
   */
  private _fetchAllProducts(): void {
    this._http
      .get<Product[]>('https://api.punkapi.com/v2/beers', {
        params: httpParametersFromObject({
          per_page: 80
        })
      })
      .pipe(takeUntil(this._destroyed$))
      .subscribe(
        (products: Product[]) => this._products$.next(products),
        () => this._products$.next([])
      );
  }
}
