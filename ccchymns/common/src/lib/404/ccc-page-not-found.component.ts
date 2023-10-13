import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageResourceKey } from './i18n/language-resource-key';

@Component({
  selector: 'ccc-page-not-found',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ccc-page-not-found.component.html',
  styleUrls: ['./ccc-page-not-found.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CCCPageNotFoundComponent {
  root = '';
  languageResourceKey = LanguageResourceKey;
}
