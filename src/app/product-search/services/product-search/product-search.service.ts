import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductSearchParameters } from '@brewdog/product-search/models/product-search-parameters.interface';
import { Product } from '@brewdog/product-search/models/product.interface';
import { httpParametersFromObject } from '@brewdog/shared';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductSearchService {
  constructor(private _http: HttpClient) {}

  public searchProducts(searchParameters: ProductSearchParameters): Observable<Product[]> {
    return this._http.get<Product[]>('https://api.punkapi.com/v2/beers', {
      params: httpParametersFromObject({
        beer_name: searchParameters?.productName
      })
    });
  }
}
