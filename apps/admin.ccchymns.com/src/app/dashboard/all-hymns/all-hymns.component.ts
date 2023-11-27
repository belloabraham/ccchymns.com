import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  NgMatTooltipModule,
  NgMaterialButtonModule,
  SharedModule,
} from '@ccchymns.com/angular';
import { CCCIconDirective } from '@ccchymns.com/ui';
import { EmptyStateComponent, ErrorStateComponent } from '../shared';
import { DashboardLanguageResourceKey } from '../i18n/language-resource-key';
import { RootLanguageResourceKey } from '@ccchymns.com/common';
import { AllHymnsTableComponent } from './all-hymns-table/all-hymns-table.component';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-all-hymns',
  standalone: true,
  imports: [
    SharedModule,
    CCCIconDirective,
    NgMaterialButtonModule,
    NgMatTooltipModule,
    EmptyStateComponent,
    ErrorStateComponent,
    AllHymnsTableComponent,
  ],
  templateUrl: './all-hymns.component.html',
  styleUrls: ['./all-hymns.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllHymnsComponent{
  columnNames = COLUMN_NAMES_FOR_LYRICS_TABLE;
  languageResourceKey = LanguageResourceKey;
  rootLanguageResourceKey = RootLanguageResourceKey;
  dashboardLanguageResourceKey = DashboardLanguageResourceKey;
  filterBy?: string;
  sortOrderIsAscending = true;
  columnIdForSorting = COLUMN_NAMES_FOR_LYRICS_TABLE[0];
  @Input({ required: true }) titleKey!: string;
  @Input({ required: true }) data: HymnLyricsUIState[] = [];
  private subscriptions = new SubSink();

  onFilterTextChanged(event: any) {
    this.filterBy = event.target.value;
  }

}
