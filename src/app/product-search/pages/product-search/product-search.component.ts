import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromProductSearch from '../../store';

@Component({
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductSearchComponent implements OnInit {
  constructor(private _store: Store<fromProductSearch.ProductSearchState>) {}

  public ngOnInit(): void {
    this._store.dispatch(fromProductSearch.productSearch());
  }
}
