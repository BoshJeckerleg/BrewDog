import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductSearchFiltersComponent } from './components/product-search-filters/product-search-filters.component';
import { ProductSearchResultComponent } from './components/product-search-result/product-search-result.component';
import { ProductSearchComponent } from './pages/product-search/product-search.component';
import { ProductSearchRoutingModule } from './product-search-routing.module';
import { ProductSearchStoreModule } from './store/product-search.store.module';

@NgModule({
  declarations: [ProductSearchComponent, ProductSearchResultComponent, ProductSearchFiltersComponent],
  imports: [CommonModule, ProductSearchRoutingModule, ProductSearchStoreModule]
})
export class ProductSearchModule {}
