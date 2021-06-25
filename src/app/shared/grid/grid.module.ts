import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GridColumnComponent } from './components/grid-column/grid-column.component';
import { GridRowComponent } from './components/grid-row/grid-row.component';
import { GridSectionComponent } from './components/grid-section/grid-section.component';
import { GridComponent } from './components/grid/grid.component';

@NgModule({
  declarations: [GridColumnComponent, GridRowComponent, GridComponent, GridSectionComponent],
  imports: [CommonModule, RouterModule],
  exports: [GridColumnComponent, GridRowComponent, GridComponent, GridSectionComponent]
})
export class SharedGridModule {}
