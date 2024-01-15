import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';
import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/scrolling';
import { ElementRef, forwardRef, Inject, NgZone } from '@angular/core';
import { CCCDrawerContentComponent } from '../ccc-drawer/ccc-drawer-content.component';
import { CCCSidenavContainerComponent } from './ccc-sidenav-container.component';

@Component({
  selector: 'ccc-sidenav-content',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: CdkScrollable,
      useExisting: CCCSidenavContentComponent,
    },
  ],
})
export class CCCSidenavContentComponent extends CCCDrawerContentComponent {
  @HostBinding('attr.ngSkipHydration') _ngSkipHydrationAttribute = '';

  @HostBinding('class') get _content() {
    return 'ccc-drawer-content ccc-sidenav-content';
  }

  @HostBinding('style.margin-left.px') get _contentMarginLeft() {
    return this.container?.contentMargins.left;
  }

  @HostBinding('style.margin-right.px') get _contentMarginRight() {
    return this.container?.contentMargins.right;
  }

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    @Inject(forwardRef(() => CCCSidenavContainerComponent))
    container: CCCSidenavContainerComponent,
    elementRef: ElementRef<HTMLElement>,
    scrollDispatcher: ScrollDispatcher,
    ngZone: NgZone
  ) {
    super(changeDetectorRef, container, elementRef, scrollDispatcher, ngZone);
  }
}
