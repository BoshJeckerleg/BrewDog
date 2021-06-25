import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ElementIntersectionDirective } from './directives/element-intersection/element-intersection.directive';

@NgModule({
  declarations: [ElementIntersectionDirective],
  imports: [CommonModule],
  exports: [ElementIntersectionDirective]
})
export class SharedUtilsModule {}
