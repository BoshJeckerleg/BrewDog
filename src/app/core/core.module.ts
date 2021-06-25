import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedButtonModule, SharedGridModule } from '@brewdog/shared';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SubheaderComponent } from './components/subheader/subheader.component';
import { CoreRoutingModule } from './core-routing.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [HeaderComponent, SubheaderComponent, FooterComponent, PageNotFoundComponent],
  imports: [CommonModule, CoreRoutingModule, SharedGridModule, SharedButtonModule],
  exports: [HeaderComponent, SubheaderComponent, FooterComponent]
})
export class CoreModule {}
