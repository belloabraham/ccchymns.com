import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageResourceKey } from './i18n/language-resource-key';

@Component({
  selector: 'ccc-page-not-found',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CCCHymnsPageNotFoundComponent {
  root = '';
  languageResourceKey = LanguageResourceKey;
}
