import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedGridModule, SharedMediaModule } from '@brewdog/shared';
import { SharedFormsModule } from '@brewdog/shared/forms/components/forms.module';
import { ProductSearchFiltersComponent } from './components/product-search-filters/product-search-filters.component';
import { ProductSearchResultComponent } from './components/product-search-result/product-search-result.component';
import { ProductSearchResultsComponent } from './components/product-search-results/product-search-results.component';
import { ProductSearchComponent } from './pages/product-search/product-search.component';
import { ProductSearchRoutingModule } from './product-search-routing.module';
import { ProductSearchFormBuilder } from './services/product-search-form-buiilder/product-search-form-builder.service';
import { ProductSearchStoreModule } from './store/product-search.store.module';

@NgModule({
  declarations: [
    ProductSearchComponent,
    ProductSearchResultComponent,
    ProductSearchFiltersComponent,
    ProductSearchResultsComponent
  ],
  imports: [
    CommonModule,
    ProductSearchRoutingModule,
    ProductSearchStoreModule,
    SharedGridModule,
    SharedFormsModule,
    SharedMediaModule
  ],
  providers: [ProductSearchFormBuilder]
})
export class ProductSearchModule {}
