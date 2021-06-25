import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProductSearchFormBuilder } from '@brewdog/product-search/services/product-search-form-buiilder/product-search-form-builder.service';
import { Store } from '@ngrx/store';
import * as fromProductSearch from '../../store';

@Component({
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductSearchComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private _productSearchFormBuilder: ProductSearchFormBuilder,
    private _store: Store<fromProductSearch.ProductSearchState>
  ) {}

  public ngOnInit(): void {
    this._store.dispatch(fromProductSearch.productSearch());
    this._buildProductSearchForm();
  }

  private _buildProductSearchForm(): void {
    this.form = this._productSearchFormBuilder.buildProductSearchForm();
  }
}
