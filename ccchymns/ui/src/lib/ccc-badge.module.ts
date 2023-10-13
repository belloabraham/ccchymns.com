import { NgModule } from '@angular/core';
import { CCCBadgeDirective, CCCBadgeRoundedDirective } from './directives';
import { CCCRoundedBadgeComponent } from './components';

const COMMON = [
  CCCBadgeDirective,
  CCCRoundedBadgeComponent,
  CCCBadgeRoundedDirective,
];

@NgModule({
  imports: COMMON,
  exports: COMMON,
})
export class CCCBadgedModule {}
