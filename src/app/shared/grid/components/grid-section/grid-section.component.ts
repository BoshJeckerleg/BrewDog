import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-grid-section',
  templateUrl: './grid-section.component.html',
  styleUrls: ['./grid-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridSectionComponent {}
