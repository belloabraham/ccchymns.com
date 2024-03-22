import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMaterialButtonModule } from '@ccchymns.com/angular';
import { TranslocoModule } from '@ngneat/transloco';
import { ReactiveFormsModule } from '@angular/forms';

const MODULES = [
  CommonModule,
  TranslocoModule,
  NgMaterialButtonModule,
  ReactiveFormsModule,
];


@NgModule({
  imports: MODULES,
  exports: MODULES,
})
export class DialogModule {}
