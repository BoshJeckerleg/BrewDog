import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { DescriptionListItemComponent } from './components/description-list-item/description-list-item.component';
import { DescriptionListComponent } from './components/description-list/description-list.component';

@NgModule({
  declarations: [CardComponent, DescriptionListComponent, DescriptionListItemComponent],
  imports: [CommonModule],
  exports: [CardComponent, DescriptionListComponent, DescriptionListItemComponent]
})
export class SharedLayoutModule {}
