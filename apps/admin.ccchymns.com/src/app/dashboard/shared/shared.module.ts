import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';

const MODULES = [CommonModule, TranslocoModule];

@NgModule({
  imports: MODULES,
  exports: MODULES,
})
export class SharedModule {}
