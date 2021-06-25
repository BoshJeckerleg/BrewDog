import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSearchFiltersComponent } from './product-search-filters.component';

describe('ProductSearchFiltersComponent', () => {
  let component: ProductSearchFiltersComponent;
  let fixture: ComponentFixture<ProductSearchFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSearchFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSearchFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
