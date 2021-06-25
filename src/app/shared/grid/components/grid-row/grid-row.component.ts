import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-grid-row',
  template: '<ng-content></ng-content>',
  styleUrls: ['./grid-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridRowComponent {}
