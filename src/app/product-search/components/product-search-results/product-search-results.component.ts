import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductSearchDisplay } from '@brewdog/product-search/models/product-search-display.enum';
import { Product } from '@brewdog/product-search/models/product.interface';
import { AnimationFade } from '@brewdog/shared';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as fromProductSearch from '../../store';

@Component({
  selector: 'app-product-search-results',
  templateUrl: './product-search-results.component.html',
  styleUrls: ['./product-search-results.component.scss'],
  animations: [AnimationFade.Out, AnimationFade.InUp],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductSearchResultsComponent implements OnInit {
  public products$: Observable<Product[]>;
  public display: typeof ProductSearchDisplay = ProductSearchDisplay;
  public display$: Observable<ProductSearchDisplay>;
  public searching$: Observable<boolean>;

  constructor(private _store: Store<fromProductSearch.ProductSearchState>) {}

  public ngOnInit(): void {
    this._connectToStore();
  }

  public updateProductSearchDisplay(display: ProductSearchDisplay): void {
    this._store.dispatch(fromProductSearch.updateProductSearchDisplay({ display }));
  }

  public trackProduct(index: number, product: Product): number {
    return product.id;
  }

  private _connectToStore(): void {
    this.display$ = this._store.select(fromProductSearch.selectProductSearchDisplay);
    this.searching$ = this._store.select(fromProductSearch.selectProductSearching);
    this.products$ = combineLatest([this.searching$, this._store.select(fromProductSearch.selectProducts)]).pipe(
      filter(([searching, products]: [boolean, Product[]]) => searching === false),
      map(([searching, products]: [boolean, Product[]]) => products)
    );
  }
}
