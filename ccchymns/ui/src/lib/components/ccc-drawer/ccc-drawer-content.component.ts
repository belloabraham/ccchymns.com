/* eslint-disable @angular-eslint/no-output-on-prefix */
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  Inject,
  NgZone,
  ViewEncapsulation,
  forwardRef,
} from '@angular/core';
import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/scrolling';
import { CCCDrawerContainerComponent } from './ccc-drawer-container.component';

@Component({
  selector: 'ccc-drawer-content',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: CdkScrollable,
      useExisting: CCCDrawerContentComponent,
    },
  ],
})
export class CCCDrawerContentComponent
  extends CdkScrollable
  implements AfterContentInit
{
  @HostBinding('attr.ngSkipHydration') ngSkipHydrationAttribute = '';
  @HostBinding('class') get content() {
    return 'ccc-drawer-content';
  }
  @HostBinding('style.margin-left.px') get contentMarginLeft() {
    return this.container?.contentMargins.left;
  }
  @HostBinding('style.margin-right.px') get contentMarginRight() {
    return this.container?.contentMargins.right;
  }

  constructor(
    private cdRef: ChangeDetectorRef,
    @Inject(forwardRef(() => CCCDrawerContainerComponent))
    public container: CCCDrawerContainerComponent,
    elementRef: ElementRef<HTMLElement>,
    scrollDispatcher: ScrollDispatcher,
    ngZone: NgZone
  ) {
    super(elementRef, scrollDispatcher, ngZone);
  }

  ngAfterContentInit() {
    this.container?.contentMarginChanges.subscribe(() => {
      this.cdRef.markForCheck();
    });
  }
}
