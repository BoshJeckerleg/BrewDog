import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromProductSearch from '../store';
import { ProductSearchEffects } from './product-search.effects';

@NgModule({
  imports: [
    StoreModule.forFeature(fromProductSearch.featureKey, fromProductSearch.reducer),
    EffectsModule.forFeature([ProductSearchEffects])
  ],
  exports: [StoreModule]
})
export class ProductSearchStoreModule {}
