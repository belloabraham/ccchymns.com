import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { NgMaterialButtonModule } from '@ccchymns.com/angular';
import { TranslocoModule } from '@ngneat/transloco';
import { NgOptimizedImage } from '@angular/common';
import { DashboardLanguageResourceKey } from '../../i18n/language-resource-key';

@Component({
  selector: 'app-error-state',
  standalone: true,
  imports: [TranslocoModule, NgMaterialButtonModule, NgOptimizedImage],
  templateUrl: './error-state.component.html',
  styleUrl: './error-state.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorStateComponent {
  dashboardLanguageResourceKey = DashboardLanguageResourceKey;
  @Output() retry = new EventEmitter<void>();

  onRetry() {
    this.retry.emit();
  }
}
