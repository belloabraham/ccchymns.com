import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { LanguageResourceKey } from './i18n/language-resource-key';
import {
  NgMaterialButtonModule,
  NgMaterialElevationDirective,
} from '@ccchymns.com/angular';

@Component({
  selector: 'ccc-page-not-found',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NgOptimizedImage,
    TranslocoModule,
    NgMaterialButtonModule,
    NgMaterialElevationDirective,
  ],
  templateUrl: './ccc-page-not-found.component.html',
  styleUrls: ['./ccc-page-not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CCCPageNotFoundComponent {
  root = '';
  languageResourceKey = LanguageResourceKey;
}
