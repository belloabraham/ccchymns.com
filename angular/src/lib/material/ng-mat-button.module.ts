import { NgModule } from '@angular/core';
import {
  NgMaterialButtonComponent,
  NgMaterialIconButtonComponent,
} from './components';
import {
  NgMaterialButtonDirective,
  NgMaterialIconButtonDirective,
  NgMaterialRaisedButtonDirective,
  NgMaterialStrokedButtonDirective,
} from './directives';

const BUTTON = [
  NgMaterialButtonComponent,
  NgMaterialIconButtonComponent,
  NgMaterialButtonDirective,
  NgMaterialIconButtonDirective,
  NgMaterialRaisedButtonDirective,
  NgMaterialStrokedButtonDirective,
];

@NgModule({
  imports: BUTTON,
  exports: BUTTON,
})
export class NgMaterialButtonModule {}
