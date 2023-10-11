import { NgModule } from '@angular/core';
import { CCCBadgeDirective, CCCBadgeRoundedDirective } from './directives';
import { CCCRoundedBadgeComponent } from './components/badge/rounded-badge.component';

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
