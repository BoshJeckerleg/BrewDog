import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent implements OnInit {
  @Input() public control: AbstractControl;
  @Input() public label: string;
  @Input() public name: string;
  @Input() public placeholder: string = '';
  @Input() public required: string;

  public id: number = Math.floor(Math.random() * 1000);

  constructor() {}

  ngOnInit(): void {}

  public onBlur(): void {
    this.control.markAsTouched();
  }
}
