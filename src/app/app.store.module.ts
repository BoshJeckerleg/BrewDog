import { NgModule } from '@angular/core';
import * as fromProductSearch from '@brewdog/product-search/store';
import { EffectsModule } from '@ngrx/effects';
import { Action, ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';
import { environment } from 'src/environments/environment';

export interface ApplicationState {
  [fromProductSearch.featureKey]?: fromProductSearch.ProductSearchState;
}

export function localStorageSyncReducer(reducer: ActionReducer<ApplicationState>): ActionReducer<ApplicationState> {
  return localStorageSync({ keys: [fromProductSearch.featureKey], storage: localStorage, rehydrate: true })(reducer);
}

export const metaReducers: MetaReducer<ApplicationState, Action>[] = [localStorageSyncReducer];

@NgModule({
  imports: [
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  exports: [StoreModule]
})
export class AppStoreModule {}
