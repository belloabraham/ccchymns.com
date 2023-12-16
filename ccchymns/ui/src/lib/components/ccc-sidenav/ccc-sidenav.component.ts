import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import {
  BooleanInput,
  NumberInput,
  coerceBooleanProperty,
  coerceNumberProperty,
} from '@angular/cdk/coercion';
import { cccDrawerAnimations } from '../ccc-drawer/drawer-animations';
import { CCCDrawerComponent } from '../ccc-drawer/ccc-drawer.component';


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

