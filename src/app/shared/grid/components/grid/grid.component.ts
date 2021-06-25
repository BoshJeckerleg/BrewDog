import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  template: '<ng-content></ng-content>',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent {
  @HostBinding('class.grid--fluid')
  @Input()
  public fluid?: boolean;
}
