import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  NgMatTooltipModule,
  NgMaterialButtonModule,
  SharedModule,
} from '@ccchymns.com/angular';
import { CCCIconDirective } from '@ccchymns.com/ui';
import { EmptyStateComponent, ErrorStateComponent } from '../shared';
import { DashboardLanguageResourceKey } from '../i18n/language-resource-key';
import { IEditorsHymn, RootLanguageResourceKey } from '@ccchymns.com/common';
import { AllHymnsTableComponent } from './all-hymns-table/all-hymns-table.component';
import { SubSink } from 'subsink';
import { AllHymnsPlaceholderComponent } from './all-hymns-placeholder/all-hymns-placeholder.component';
import { COLUMN_NAMES_FOR_ALL_HYMNS_TABLE } from './data';
import { LanguageResourceKey } from './i18n/language-resource-key';
import { ALL_HYMNS_MOCK_DATA } from './mock/all-hymns';

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
    AllHymnsPlaceholderComponent,
  ],
  templateUrl: './all-hymns.component.html',
  styleUrls: ['./all-hymns.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllHymnsComponent {
  columnNames = COLUMN_NAMES_FOR_ALL_HYMNS_TABLE;
  languageResourceKey = LanguageResourceKey;
  rootLanguageResourceKey = RootLanguageResourceKey;
  dashboardLanguageResourceKey = DashboardLanguageResourceKey;
  filterBy?: string;
  sortOrderIsAscending = true;
  columnIdForSorting = COLUMN_NAMES_FOR_ALL_HYMNS_TABLE[0];
  @Input({ required: true }) titleKey!: string;
  @Input({ required: true }) data: IEditorsHymn[] = ALL_HYMNS_MOCK_DATA;
  private subscriptions = new SubSink();

  onFilterTextChanged(event: any) {
    this.filterBy = event.target.value;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  retry() {}
}
