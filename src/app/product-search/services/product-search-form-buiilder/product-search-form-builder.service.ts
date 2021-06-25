import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Injectable()
export class ProductSearchFormBuilder {
  constructor(private _formBuilder: FormBuilder) {}

  public buildProductSearchForm(): FormGroup {
    return this._formBuilder.group({
      searchTerm: new FormControl()
    });
  }
}
