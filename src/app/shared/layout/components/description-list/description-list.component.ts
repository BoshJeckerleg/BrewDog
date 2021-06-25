import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-description-list',
  templateUrl: './description-list.component.html',
  styleUrls: ['./description-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DescriptionListComponent {
  @Input() public title?: string;

  constructor() {}
}
