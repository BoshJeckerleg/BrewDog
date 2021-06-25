import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ProductSearchParameters } from '@brewdog/product-search/models/product-search-parameters.interface';

@Injectable()
export class ProductSearchFormBuilder {
  constructor(private _formBuilder: FormBuilder) {}

  public buildProductSearchForm(searchParameters: ProductSearchParameters): FormGroup {
    return this._formBuilder.group({
      productName: new FormControl(searchParameters.productName)
    });
  }
}
