import { InjectionToken } from "@angular/core";

export function throwMatDuplicatedDrawerError(position: string) {
  throw Error(`A drawer was already declared for 'position="${position}"'`);
}

export type AutoFocusTarget = 'dialog' | 'first-tabbable' | 'first-heading';

export type DrawerToggleResult = 'open' | 'close';

/** Drawer and SideNav display modes. */
export type DrawerMode = 'over' | 'push' | 'side';

export const CCC_DRAWER_DEFAULT_AUTOSIZE = new InjectionToken<boolean>(
  'CCC_DRAWER_DEFAULT_AUTOSIZE',
  {
    providedIn: 'root',
    factory: CCC_DRAWER_DEFAULT_AUTOSIZE_FACTORY,
  }
);

export const CCC_DRAWER_CONTAINER = new InjectionToken('MAT_DRAWER_CONTAINER');

export function CCC_DRAWER_DEFAULT_AUTOSIZE_FACTORY(): boolean {
  return false;
}
