import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  HostBinding,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';
import { CCC_DRAWER_CONTAINER } from '../ccc-drawer/drawer.token';
import { CCCDrawerContainerComponent } from '../ccc-drawer/ccc-drawer-container.component';
import { CCCSidenavComponent } from './ccc-sidenav.component';
import { CCCSidenavContentComponent } from './ccc-sidenav-content.component';

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
  override drawers: QueryList<CCCSidenavComponent> = undefined!;

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
