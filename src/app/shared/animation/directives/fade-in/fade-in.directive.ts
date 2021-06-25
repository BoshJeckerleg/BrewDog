import { animate, AnimationBuilder, AnimationPlayer, style } from '@angular/animations';
import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';
import { ElementIntersectionUtilsService } from '@brewdog/shared';
import { ReplaySubject } from 'rxjs';
import { delay, first, takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[appFadeIn]'
})
export class FadeInDirective implements AfterViewInit, OnDestroy {
  @Input('appFadeIn') public direction: 'up' | 'left' | 'right' | 'down' = 'up';
  @Input('appFadeInOrder') public order: number | string = 0;
  @Input('appFadeInImmediate') public immediate: boolean;
  @Input('appFadeInDuration') public duration: number = 300;

  private _animate$: ReplaySubject<void> = new ReplaySubject();
  private _animationPlayer: AnimationPlayer;
  private _destroyed$: ReplaySubject<void> = new ReplaySubject();

  constructor(
    private _animationBuilder: AnimationBuilder,
    private _elementRef: ElementRef,
    private _elementIntersectionUtilsService: ElementIntersectionUtilsService
  ) {}

  public ngAfterViewInit(): void {
    this._buildAnimation();
    this._listenToAnimationTrigger();

    if (this.immediate) {
      this._animate$.next();
    } else {
      this._observeElementIntersection();
    }
  }

  public ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
    this._elementIntersectionUtilsService.unobserveElementIntersection(this._element);
  }

  private _buildAnimation = (): void => {
    this._animationPlayer = this._animationBuilder
      .build([
        style({ visibility: 'hidden', opacity: 0, transform: this._animationStartPosition }),
        animate(
          `${this.duration}ms ease-out`,
          style({ visibility: 'visible', opacity: 1, transform: 'translate(0, 0)' })
        )
      ])
      .create(this._element);

    this._animationPlayer.init();
  };

  private _observeElementIntersection(): void {
    this._elementIntersectionUtilsService
      .observeElementIntersection(this._element)
      .pipe(takeUntil(this._destroyed$))
      .subscribe(() => this._animate$.next());
  }

  private _listenToAnimationTrigger(): void {
    this._animate$
      .pipe(first(), delay((Number(this.order) * this.duration) / 3), takeUntil(this._destroyed$))
      .subscribe(() => this._animationPlayer.play());
  }

  private get _animationStartPosition(): string {
    const animationDistance: string = '64px';

    switch (this.direction) {
      case 'up':
        return `translate(0, ${animationDistance})`;
      case 'down':
        return `translate(0, -${animationDistance})`;
      case 'left':
        return `translate(${animationDistance}, 0)`;
      case 'right':
        return `translate(-${animationDistance}, 0)`;
      default:
        return `translate(0, ${animationDistance})`;
    }
  }

  private get _element(): HTMLElement {
    return this._elementRef.nativeElement;
  }
}
