import { TestBed } from '@angular/core/testing';
import { ProductSearchFormBuilder } from './product-search-form-builder.service';

describe('ProductSearchFormBuilder', () => {
  let service: ProductSearchFormBuilder;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductSearchFormBuilder);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
