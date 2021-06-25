import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  HostListener,
  Input,
  TemplateRef
} from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map, startWith } from 'rxjs/operators';
import { SelectOption } from '../../models/select-option.interface';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent {
  @Input() public control: AbstractControl;
  @Input() public label: string;
  @Input() public name: string;
  @Input() public placeholder: string = 'Select an option';
  @Input() public required: string;
  @Input() public options: SelectOption[];

  @ContentChild('optionTemplate', { static: false })
  public optionTemplate: TemplateRef<unknown>;

  public expanded$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public triggerLabel$: Observable<string>;
  public id: number = Math.floor(Math.random() * 1000);

  constructor(private _elementRef: ElementRef) {}

  public ngOnInit(): void {
    this._loadSelectTriggerLabel();
  }

  public onBlur(): void {
    this.control.markAsTouched();
  }

  public toggle = (): void => {
    this.expanded$.value ? this.collapse() : this.expand();
  };

  public expand = (): void => {
    if (this.control.enabled && this.options?.length) {
      this.expanded$.next(true);
    }
  };

  public collapse = (): void => {
    this.onBlur();
    this.expanded$.next(false);
  };

  public handleSelection = (option: SelectOption): void => {
    this.control.setValue(option.value);
    this.collapse();
  };

  @HostListener('document:keydown', ['$event'])
  public handleSelectDropdownKeydown = (event: KeyboardEvent): void => {
    if (this.expanded$.value && event.key === 'Escape') {
      this.collapse();
    }
  };

  @HostListener('document:mousedown', ['$event'])
  public handleSelectDropdownClick = (event: MouseEvent): void => {
    if (this.expanded$.value && !this._elementRef.nativeElement.parentElement.contains(event.target)) {
      this.collapse();
    }
  };

  public trackOption(index: number, option: SelectOption): string {
    return option.value;
  }

  private _loadSelectTriggerLabel(): void {
    this.triggerLabel$ = this.control.valueChanges.pipe(
      startWith(this.control.value),
      distinctUntilChanged(),
      map((value: string) => this.options.find((option: SelectOption) => option.value === value)),
      map((selectedOption: SelectOption) => selectedOption?.label ?? this.placeholder)
    );
  }
}
