import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SelectComponent } from './components/select/select.component';

@NgModule({
  declarations: [SearchBarComponent, SelectComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ReactiveFormsModule, SearchBarComponent, SelectComponent]
})
export class SharedFormsModule {}
