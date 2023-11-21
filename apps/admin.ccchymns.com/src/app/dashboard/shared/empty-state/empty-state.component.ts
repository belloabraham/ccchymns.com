import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { DashboardLanguageResourceKey } from '../../i18n/language-resource-key';

@Component({
  selector: 'app-empty-sate',
  standalone: true,
  imports: [NgOptimizedImage, TranslocoModule],
  templateUrl: './empty-state.component.html',
  styleUrl: './empty-state.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyStateComponent {
  @Input({ required: true }) descriptionKey!: string;
  dashboardLanguageResourceKey = DashboardLanguageResourceKey;
}
