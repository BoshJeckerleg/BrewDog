import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@brewdog/product-search/models/product.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductSearchService {
  constructor(private _http: HttpClient) {}

  public searchProducts(): Observable<Product[]> {
    return this._http.get<Product[]>('https://api.punkapi.com/v2/beers');
  }
}
