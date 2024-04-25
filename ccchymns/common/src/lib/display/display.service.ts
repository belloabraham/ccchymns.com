import { Injectable } from '@angular/core';
import { Providers } from '@ccchymns.com/angular';
import { ReplaySubject } from 'rxjs';

export type DisplaySize =
  | 'Small'
  | 'XSmall'
  | 'Medium'
  | 'Large'
  | 'XLarge'
  | 'XXLarge';

export type DisplayPercentage = 0.75 | 0.85 | 0.95 | 1.05 | 1.4 | 1.0;

export class Size {
  static readonly Small = 'Small';
  static readonly XSmall = 'XSmall';
  static readonly Medium = 'Medium';
  static readonly Large = 'Large';
  static readonly XLarge = 'XLarge';
  static readonly XXLarge = 'XXLarge';
}

export class Breakpoints {
  static readonly XSmall = '(min-width: 320px)';
  static readonly Small = '(min-width: 425px)';
  static readonly Medium = '(min-width: 576px)';
  static readonly Large = '(min-width: 992px)';
  static readonly XLarge = '(min-width: 1200px)';
  static readonly XXLarge = '(min-width: 1400px)';
  static readonly XXXLarge = '(min-width: 2500px)';
}

export class Display {
  static readonly percentage85 = 0.75;
  static readonly percentage75 = 0.85;
  static readonly percentage95 = 0.95;
  static readonly percentage105 = 1.05;
  static readonly percentage100 = 1.0;
  static readonly percentage140 = 1.4;
}

@Injectable({
  providedIn: Providers.ROOT,
})
export class DisplayService {
  private NUMBER_OF_CACHED_DATA = 1;
  size: DisplaySize = Size.Large;
  size$ = new ReplaySubject<DisplaySize>(this.NUMBER_OF_CACHED_DATA);
  percentage: DisplayPercentage = Display.percentage100;
}
