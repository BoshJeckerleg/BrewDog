import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { productSearchSortSelectOptions as ProductSearchSortSelectOptions } from '@brewdog/product-search/constants/product-search-sort-select-options.constant';
import { ProductSearchParameters } from '@brewdog/product-search/models/product-search-parameters.interface';
import { ProductSearchSort } from '@brewdog/product-search/models/product-search-sort.enum';
import { ProductSearchFormBuilder } from '@brewdog/product-search/services/product-search-form-buiilder/product-search-form-builder.service';
import { SelectOption } from '@brewdog/shared/forms/models/select-option.interface';
import { Store } from '@ngrx/store';
import { ReplaySubject } from 'rxjs';
import { distinctUntilChanged, first, map, takeUntil, withLatestFrom } from 'rxjs/operators';
import * as fromProductSearch from '../../store';

@Component({
  selector: 'app-product-search-filters',
  templateUrl: './product-search-filters.component.html',
  styleUrls: ['./product-search-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductSearchFiltersComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public sortSelectOptions: SelectOption<ProductSearchSort>[] = ProductSearchSortSelectOptions;

  private _destroyed$: ReplaySubject<void> = new ReplaySubject();

  constructor(
    private _productSearchFormBuilder: ProductSearchFormBuilder,
    private _store: Store<fromProductSearch.ProductSearchState>
  ) {}

  public ngOnInit(): void {
    this._buildProductSearchForm();
  }

  public ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  private _buildProductSearchForm(): void {
    this._store
      .select(fromProductSearch.selectProductSearchParameters)
      .pipe(first())
      .subscribe((searchParameters: ProductSearchParameters) => {
        this.form = this._productSearchFormBuilder.buildProductSearchForm(searchParameters);
        this._listenToFormValueChanges();
      });
  }

  private _listenToFormValueChanges(): void {
    this.form.valueChanges
      .pipe(
        distinctUntilChanged(),
        withLatestFrom(this._store.select(fromProductSearch.selectProductSearchParameters)),
        map(([formValue, existingSearchParameters]: [Partial<ProductSearchParameters>, ProductSearchParameters]) => ({
          ...existingSearchParameters,
          ...formValue
        })),
        takeUntil(this._destroyed$)
      )
      .subscribe((searchParameters: ProductSearchParameters) => {
        this._store.dispatch(
          fromProductSearch.updateProductSearchParameters({
            searchParameters
          })
        );
      });
  }
}
