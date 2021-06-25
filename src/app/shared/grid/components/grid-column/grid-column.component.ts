import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { GridColumnSize } from '../../models/grid-column-size.type';

@Component({
  selector: 'app-grid-column',
  template: '<ng-content></ng-content>',
  styleUrls: ['./grid-column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridColumnComponent {
  @Input() public span: GridColumnSize = 12;
  @Input() public xs: GridColumnSize;
  @Input() public sm: GridColumnSize;
  @Input() public md: GridColumnSize;
  @Input() public lg: GridColumnSize;
  @Input() public xl: GridColumnSize;

  constructor() {}

  @HostBinding('class')
  public get cssClass(): string {
    const cssClasses: string[] = ['grid-column', `grid-column--${this.span}`];

    if (this.xs) {
      cssClasses.push(`grid-column--xs${this.xs}`);
    }
    if (this.sm) {
      cssClasses.push(`grid-column--sm${this.sm}`);
    }
    if (this.md) {
      cssClasses.push(`grid-column--md${this.md}`);
    }
    if (this.lg) {
      cssClasses.push(`grid-column--lg${this.lg}`);
    }
    if (this.xl) {
      cssClasses.push(`grid-column--xl${this.xl}`);
    }

    return cssClasses.join(' ');
  }
}
