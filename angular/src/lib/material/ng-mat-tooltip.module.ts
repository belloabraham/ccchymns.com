import { NgModule } from '@angular/core';
import {
  NgMatTooltipDirective,
  NgMatTooltipButtonDirective,
  NgMatDialogRichTooltipButtonDirective,
  NgMatTooltipContentLinkDirective,
} from './directives';
import {
  NgMaterialDialogRichTooltipComponent,
  NgMaterialRichTooltipComponent,
  NgMaterialTooltipComponent,
} from './components';

const TOOLTIP = [
  NgMatTooltipButtonDirective,
  NgMatTooltipDirective,
  NgMaterialTooltipComponent,
  NgMaterialRichTooltipComponent,
  NgMatDialogRichTooltipButtonDirective,
  NgMatTooltipContentLinkDirective,
  NgMaterialDialogRichTooltipComponent,
];

@NgModule({
  imports: TOOLTIP,
  exports: TOOLTIP,
})
export class NgMatTooltipModule {}
