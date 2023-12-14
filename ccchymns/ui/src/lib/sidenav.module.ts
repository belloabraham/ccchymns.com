import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkScrollableModule } from '@angular/cdk/scrolling';
import {
  CCCDrawerComponent,
  CCCDrawerContainerComponent,
  CCCDrawerContentComponent,
} from './components/ccc-drawer/ccc-drawer.component';
import {
  CCCSidenavComponent,
  CCCSidenavContainerComponent,
  CCCSidenavContentComponent,
} from './components/ccc-sidenav/ccc-sidenav.component';

const COMPONENTS = [
  CCCDrawerComponent,
  CCCDrawerContainerComponent,
  CCCDrawerContentComponent,
  CCCSidenavContainerComponent,
  CCCSidenavContentComponent,
  CCCSidenavComponent,
];

@NgModule({
  imports: [CommonModule, CdkScrollableModule],
  exports: [CdkScrollableModule, ...COMPONENTS],
  declarations: [...COMPONENTS],
})
export class SidenavModule {}
