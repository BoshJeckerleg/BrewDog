import { AfterViewInit, Directive, ElementRef, EventEmitter, OnDestroy, Output } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ElementIntersectionUtilsService } from '../../services/element-intersection-utils/element-intersection-utils.service';

@Directive({
  selector: '[appElementIntersection]'
})
export class ElementIntersectionDirective implements AfterViewInit, OnDestroy {
  @Output() public handleElementIntersection = new EventEmitter<IntersectionObserverEntry>();

  private _destroyed$: ReplaySubject<void> = new ReplaySubject();

  constructor(
    private _elementRef: ElementRef,
    private _elementIntersectionUtilsService: ElementIntersectionUtilsService
  ) {}

  public ngAfterViewInit(): void {
    this._observeElement();
  }

  public ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
    this._elementIntersectionUtilsService.unobserveElementIntersection(this._element);
  }

  private _observeElement(): void {
    this._elementIntersectionUtilsService
      .observeElementIntersection(this._element)
      .pipe(takeUntil(this._destroyed$))
      .subscribe(() => this.handleElementIntersection.emit());
  }

  private get _element(): HTMLElement {
    return this._elementRef.nativeElement;
  }
}
