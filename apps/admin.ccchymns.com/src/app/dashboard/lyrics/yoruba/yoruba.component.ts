import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { SharedModule } from '../../shared';
import { CCCIconDirective } from '@ccchymns.com/ui';
import {
  NgMatTooltipModule,
  NgMaterialButtonModule,
} from '@ccchymns.com/angular';
import {
  RootLanguageResourceKey,
} from '@ccchymns.com/common';
import { LYRICS } from '../shared/mock/lyrics';
import { LanguageResourceKey } from '../i18n/language-resource-key';
import { DashboardLanguageResourceKey } from '../../i18n/language-resource-key';
import { COLUMN_NAMES, LyricsPlaceholderComponent, LyricsTableComponent } from '../shared';

@Component({
  selector: 'app-lyrics-yoruba',
  standalone: true,
  imports: [
    SharedModule,
    CCCIconDirective,
    NgMaterialButtonModule,
    NgMatTooltipModule,
    LyricsTableComponent,
    LyricsPlaceholderComponent,
  ],
  templateUrl: './yoruba.component.html',
  styleUrl: './yoruba.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YorubaComponent {
  columnNames = COLUMN_NAMES;
  data = LYRICS;
  languageResourceKey = LanguageResourceKey;
  rootLanguageResourceKey = RootLanguageResourceKey;
  dashboardLanguageResourceKey = DashboardLanguageResourceKey;
  filterBy?: string;
  sortOrderIsAscending = true;
  sortWithColumnId = COLUMN_NAMES[0];

  onFilterTextChanged(event: any) {
    this.filterBy = event.target.value;
  }

}
