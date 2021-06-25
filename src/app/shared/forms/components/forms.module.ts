import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [SearchBarComponent, SelectComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ReactiveFormsModule, SearchBarComponent, SelectComponent]
})
export class SharedFormsModule {}
