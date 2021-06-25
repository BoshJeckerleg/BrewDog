import { animate, state, style, transition, trigger } from '@angular/animations';

export class AnimationFade {
  private static _duration: number = 300;
  private static _distance: string = '100px';

  public static In = trigger('animationFadeIn', [
    state('void', style({ opacity: 0 })),
    transition(':enter', [animate(`${AnimationFade._duration}ms ease-out`)])
  ]);

  public static InUp = trigger('animationFadeInUp', [
    state('void', style({ opacity: 0, transform: `translate(0, ${AnimationFade._distance})` })),
    transition(':enter', [animate(`${AnimationFade._duration}ms ease-out`)])
  ]);

  public static Out = trigger('animationFadeOut', [
    state('void', style({ opacity: 1 })),
    transition(':leave', [animate(`${AnimationFade._duration}ms ease-in`, style({ opacity: 0 }))])
  ]);
}
