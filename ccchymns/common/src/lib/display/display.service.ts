import { Injectable } from '@angular/core';
import { Providers } from '@ccchymns.com/angular';

export type DisplaySize =
  | 'Small'
  | 'XSmall'
  | 'Medium'
  | 'Large'
  | 'XLarge'
  | 'XXLarge';

export type DisplayPercentage = 0.85 | 0.95 | 1.05 | 1.4 | 1;

@Injectable({
  providedIn: Providers.ROOT,
})
export class DisplayService {
  size: DisplaySize = 'Large';
  percent: DisplayPercentage = 1;
}
