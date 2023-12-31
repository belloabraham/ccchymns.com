import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { SubSink } from 'subsink';
import {
  NgMatTooltipModule,
  NgMaterialButtonModule,
} from '@ccchymns.com/angular';
import { CdkTableModule } from '@angular/cdk/table';
import { TranslocoModule } from '@ngneat/transloco';
import { AudioPlayerComponent, CCCIconDirective } from '@ccchymns.com/ui';
import {
  IAudioHymnsUIState,
  DisplayService,
  RootLanguageResourceKey,
  Size,
} from '@ccchymns.com/common';
import { SortOrder, TABLE_PAGE_SIZE } from '../../../shared';
import { DashboardLanguageResourceKey } from '../../../i18n/language-resource-key';
import { AudioSpaceDataSource } from '../datasource/audio-space-datasource';
import { COLUMN_NAMES_FOR_AUDIO_HYMNS_TABLE } from '../data';

@Component({
  selector: 'app-audio-space-table',
  standalone: true,
  exportAs: 'audioSpaceTable',
  imports: [
    CdkTableModule,
    TranslocoModule,
    NgMaterialButtonModule,
    CCCIconDirective,
    NgMatTooltipModule,
    AudioPlayerComponent,
  ],
  templateUrl: './audio-space-table.component.html',
  styleUrl: './audio-space-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudioSpaceTableComponent implements OnInit, OnChanges {
  rootLanguageResourceKey = RootLanguageResourceKey;
  dashboardLanguageResourceKey = DashboardLanguageResourceKey;
  pagination = Array(0);
  private subscriptions = new SubSink();
  displayIsDesktop = false;

  @Input({ required: true }) data: IAudioHymnsUIState[] = [];
  @Input() filterBy: string | undefined;
  columnNames: string[] = COLUMN_NAMES_FOR_AUDIO_HYMNS_TABLE;
  dataSource = new AudioSpaceDataSource([]);

  constructor(private displayService: DisplayService) {
    this.getIsDeviceDisplayDesktopAsync();
  }

  ngOnInit(): void {
    this.dataSource = new AudioSpaceDataSource(this.data);
    const paginationLength = this.data.length / TABLE_PAGE_SIZE;
    this.pagination = Array(
      paginationLength < 1 ? 0 : Math.ceil(paginationLength)
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.filterTableData(this.filterBy);
  }

  isEndOfPagination() {
    return this.dataSource.isEndOfPagination();
  }

  getIsDeviceDisplayDesktopAsync() {
    this.subscriptions.sink = this.displayService.size$.subscribe(
      (displaySize) => {
        this.displayIsDesktop = displaySize === Size.Large;
      }
    );
  }

  getCurrentPaginationIndex() {
    return this.dataSource.getCurrentPaginationIndex();
  }

  trackByFn(index: number, item: any): any {
    return item.no;
  }

  sortDataBy(sortBy: string, order: SortOrder) {
    this.dataSource.sortDataBy(sortBy, order);
  }

  filterTableData(filterBy?: string) {
    this.dataSource.filterTableData(filterBy);
  }

  nextPage() {
    this.dataSource.nextPage();
  }

  goToPage(pageIndex: number) {
    this.dataSource.goToPage(pageIndex);
  }

  previousPage() {
    this.dataSource.previousPage();
  }
}
