import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FadeInDirective } from './directives/fade-in/fade-in.directive';

@NgModule({
  declarations: [FadeInDirective],
  imports: [CommonModule],
  exports: [FadeInDirective]
})
export class SharedAnimationModule {}
