import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button-link',
  templateUrl: './button-link.component.html',
  styleUrls: ['./button-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonLinkComponent {
  @Input() public disabled: boolean;
  @Input() public routerPath: RouterLink;
  @Input() public theme: 'primary' | 'secondary' = 'primary';
}
