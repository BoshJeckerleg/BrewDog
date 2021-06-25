import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-description-list-item',
  templateUrl: './description-list-item.component.html',
  styleUrls: ['./description-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DescriptionListItemComponent {
  @Input() public title: string;
  @Input() public details: string;
}
