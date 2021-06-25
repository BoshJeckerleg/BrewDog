import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedUtilsModule } from '../utils';
import { ImageComponent } from './components/image/image.component';

@NgModule({
  declarations: [ImageComponent],
  imports: [CommonModule, SharedUtilsModule],
  exports: [ImageComponent]
})
export class SharedMediaModule {}
