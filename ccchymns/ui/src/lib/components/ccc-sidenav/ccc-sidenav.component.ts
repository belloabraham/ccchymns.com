import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  HostBinding,
  Input,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';
import {
  CCCDrawerComponent,
  CCCDrawerContentComponent,
  CCC_DRAWER_CONTAINER,
} from '../ccc-drawer/ccc-drawer.component';
import {
  BooleanInput,
  NumberInput,
  coerceBooleanProperty,
  coerceNumberProperty,
} from '@angular/cdk/coercion';
import { cccDrawerAnimations } from '../ccc-drawer/drawer-animations';
import { CCCDrawerContainerComponent } from '../ccc-drawer/ccc-drawer.component';
import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/scrolling';
import { ElementRef, forwardRef, Inject, NgZone } from '@angular/core';

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
    return this.container.contentMargins.left;
  }

  @HostBinding('style.margin-right.px') get _contentMarginRight() {
    return this.container.contentMargins.right;
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

@Component({
  selector: 'ccc-sidenav',
  exportAs: 'cccSidenav',
  templateUrl: '../ccc-drawer/ccc-drawer.component.html',
  animations: [cccDrawerAnimations.transformDrawer],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CCCSidenavComponent extends CCCDrawerComponent {
  @HostBinding('class.ccc-sidenav') sidenav = true;
  @HostBinding('class.ccc-drawer') sidenavDrawer = true;

  @HostBinding('attr.align') align = null;
  @HostBinding('attr.tabIndex') _tabIndex = '-1';
  @HostBinding('attr.ngSkipHydration') _ngSkipHydrationAttribute = '';
  @HostBinding('style.bottom.px') get fixedBottom() {
    return this.fixedInViewport ? this.fixedBottomGap : null;
  }
  @HostBinding('style.top.px') get fixedTop() {
    return this.fixedInViewport ? this.fixedTopGap : null;
  }
  @HostBinding('class.ccc-sidenav-fixed') get fixedState() {
    return this.fixedInViewport;
  }
  @HostBinding('class.ccc-drawer-opened') get _drawerState() {
    return this.opened;
  }
  @HostBinding('class.ccc-drawer-end') get _drawerPosition() {
    return this.position === 'end';
  }
  @HostBinding('class') get _drawerMode() {
    switch (this.mode) {
      case 'over':
        return 'ccc-drawer-over';
      case 'push':
        return 'ccc-drawer-push';
      case 'side':
        return 'ccc-drawer-side';
      default:
        return 'ccc-drawer-over';
    }
  }

  @Input()
  get fixedInViewport(): boolean {
    return this._fixedInViewport;
  }
  set fixedInViewport(value: BooleanInput) {
    this._fixedInViewport = coerceBooleanProperty(value);
  }
  private _fixedInViewport = false;
  @Input()
  get fixedTopGap(): number {
    return this._fixedTopGap;
  }
  set fixedTopGap(value: NumberInput) {
    this._fixedTopGap = coerceNumberProperty(value);
  }
  private _fixedTopGap = 0;
  @Input()
  get fixedBottomGap(): number {
    return this._fixedBottomGap;
  }
  set fixedBottomGap(value: NumberInput) {
    this._fixedBottomGap = coerceNumberProperty(value);
  }
  private _fixedBottomGap = 0;
}

@Component({
  selector: 'ccc-sidenav-container',
  exportAs: 'cccSidenavContainer',
  templateUrl: './ccc-sidenav-container.component.html',
  styleUrls: [
    '../ccc-drawer/ccc-drawer.component.scss',
    './ccc-sidenav.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: CCC_DRAWER_CONTAINER,
      useExisting: CCCSidenavContainerComponent,
    },
  ],
})
export class CCCSidenavContainerComponent extends CCCDrawerContainerComponent {
  @HostBinding('attr.ngSkipHydration') _ngSkipHydrationAttribute = '';

  @ContentChildren(CCCSidenavComponent, {
    descendants: true,
  })
  override allDrawers: QueryList<CCCSidenavComponent> = undefined!;

  @ContentChild(CCCSidenavContentComponent)
  override content: CCCSidenavContentComponent = undefined!;

  @HostBinding('class') get _container() {
    return 'ccc-drawer-container ccc-sidenav-container';
  }

  @HostBinding('class.ccc-drawer-container-explicit-backdrop')
  get _backdrop() {
    return this.backdropOverride;
  }
}
