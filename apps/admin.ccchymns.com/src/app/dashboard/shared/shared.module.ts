import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { ReactiveFormsModule } from '@angular/forms';

const MODULES = [CommonModule, TranslocoModule, ReactiveFormsModule];

@NgModule({
  imports: MODULES,
  exports: MODULES,
})
export class SharedModule {}
