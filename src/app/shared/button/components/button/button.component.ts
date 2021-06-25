import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() public disabled: boolean;
  @Input() public theme: 'primary' | 'secondary' = 'primary';
  @Output() public handleClick: EventEmitter<void> = new EventEmitter();

  constructor() {}

  public onClick(): void {
    this.handleClick.emit();
  }
}
