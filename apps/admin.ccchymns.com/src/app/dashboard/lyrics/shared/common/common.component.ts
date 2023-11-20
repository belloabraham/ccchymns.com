import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
} from '@angular/core';
import { SharedModule } from '../../../shared';
import { CCCIconDirective } from '@ccchymns.com/ui';
import {
  NgMatTooltipModule,
  NgMaterialButtonModule,
} from '@ccchymns.com/angular';
import { RootLanguageResourceKey } from '@ccchymns.com/common';
import { MOCK_HYMN_LYRICS } from '../../shared/mock/lyrics';
import { LanguageResourceKey } from '../../i18n/language-resource-key';
import { DashboardLanguageResourceKey } from '../../../i18n/language-resource-key';
import { LyricsPlaceholderComponent } from '../lyrics-placeholder/lyrics-placeholder.component';
import { LyricsTableComponent } from '../lyrics-table/lyrics-table.component';
import { COLUMN_NAMES_FOR_LYRICS_TABLE } from '../data';

@Component({
  selector: 'app-lyrics-common',
  standalone: true,
  imports: [
    SharedModule,
    CCCIconDirective,
    NgMaterialButtonModule,
    NgMatTooltipModule,
    LyricsTableComponent,
    LyricsPlaceholderComponent,
  ],
  templateUrl: './common.component.html',
  styleUrl: './common.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonComponent {
  columnNames = COLUMN_NAMES_FOR_LYRICS_TABLE;
  data = MOCK_HYMN_LYRICS;
  languageResourceKey = LanguageResourceKey;
  rootLanguageResourceKey = RootLanguageResourceKey;
  dashboardLanguageResourceKey = DashboardLanguageResourceKey;
  filterBy?: string;
  sortOrderIsAscending = true;
  columnIdForSorting = COLUMN_NAMES_FOR_LYRICS_TABLE[0];
  @Input({ required: true }) titleKey!: string;

  onFilterTextChanged(event: any) {
    this.filterBy = event.target.value;
  }
}
