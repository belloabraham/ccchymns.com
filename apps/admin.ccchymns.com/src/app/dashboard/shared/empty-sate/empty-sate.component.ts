import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { DashboardLanguageResourceKey } from '../../i18n/language-resource-key';

@Component({
  selector: 'app-empty-sate',
  standalone: true,
  imports: [NgOptimizedImage, TranslocoModule],
  templateUrl: './empty-sate.component.html',
  styleUrl: './empty-sate.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptySateComponent {
  @Input({ required: true }) descriptionKey!: string;
  dashboardLanguageResourceKey = DashboardLanguageResourceKey;
}
