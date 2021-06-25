import { Injectable, OnDestroy } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { filter, first, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ElementIntersectionUtilsService implements OnDestroy {
  private _intersectionObserver: IntersectionObserver;
  private _intersectionChanges$: Subject<IntersectionObserverEntry[]> = new Subject();

  constructor() {
    this._initIntersectionObserver();
  }

  public ngOnDestroy(): void {
    this._intersectionObserver.disconnect();
  }

  private _initIntersectionObserver(): void {
    if ('IntersectionObserver' in window) {
      this._intersectionObserver = new IntersectionObserver(this._onIntersectionChange, {
        rootMargin: '0%',
        threshold: 0.25
      });
    }
  }

  private _onIntersectionChange = (intersectionChanges: IntersectionObserverEntry[]): void => {
    this._intersectionChanges$.next(intersectionChanges);
  };

  public observeElementIntersection(element: HTMLElement): Observable<void> {
    if (!this._intersectionObserver) {
      return of();
    }

    this._intersectionObserver.observe(element);

    return this._intersectionChanges$.pipe(
      filter((changes: IntersectionObserverEntry[]) =>
        changes.some((change: IntersectionObserverEntry) => change.target === element && change.isIntersecting)
      ),
      first(),
      tap(() => this.unobserveElementIntersection(element)),
      map(() => undefined)
    );
  }

  public unobserveElementIntersection(element: HTMLElement): void {
    this._intersectionObserver.unobserve(element);
  }
}
