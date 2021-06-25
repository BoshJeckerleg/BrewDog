import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, fromEvent, ReplaySubject } from 'rxjs';
import { first, map, mergeMap, takeUntil } from 'rxjs/operators';
import { transparentPixel } from '../../constants/transparent-pixel.constant';
import { AspectRatio } from '../../models/aspect-ratio.type';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageComponent implements OnInit, OnDestroy {
  @Input() public alt: string = '';
  @Input() public aspectRatio: AspectRatio = '16:9';
  @Input() public fill?: boolean;
  @Input() public src: string;

  public aspectRatioHeightPercentage: string;
  public loaded$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public portrait: boolean;
  public transparentPixel: string = transparentPixel;
  private _intersected$: ReplaySubject<void> = new ReplaySubject();
  private _destroyed$: ReplaySubject<void> = new ReplaySubject();

  constructor() {}

  public ngOnInit(): void {
    this._setAspectRatioPercentage(this.aspectRatio);
    this._lazyLoadImageOnIntersection();
  }

  public ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  public handleIntersection = (): void => {
    this._intersected$.next();
    this._intersected$.complete();
  };

  private _setAspectRatioPercentage(aspectRatio: AspectRatio): void {
    const width: number = Number(aspectRatio.split(':')[0]);
    const height: number = Number(aspectRatio.split(':')[1]);
    const heightPercentage: number = (height / width) * 100;
    this.aspectRatioHeightPercentage = `${heightPercentage}%`;
  }

  private _lazyLoadImageOnIntersection(): void {
    this._intersected$
      .pipe(
        first(),
        mergeMap(() => {
          const image: HTMLImageElement = new Image();
          image.src = this.src;
          return fromEvent(image, 'load').pipe(map(() => image));
        }),
        takeUntil(this._destroyed$)
      )
      .subscribe((image: HTMLImageElement) => {
        this.loaded$.next(true);

        if (image.height >= image.width) {
          this.portrait = true;
        }
      });
  }
}
