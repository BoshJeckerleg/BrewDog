import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonLinkComponent } from './components/button-link/button-link.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [ButtonComponent, ButtonLinkComponent],
  imports: [CommonModule, RouterModule],
  exports: [ButtonComponent, ButtonLinkComponent]
})
export class SharedButtonModule {}
