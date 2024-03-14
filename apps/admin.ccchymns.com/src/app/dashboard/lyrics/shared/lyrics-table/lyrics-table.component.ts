import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Injector,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { TranslocoModule } from '@ngneat/transloco';
import { DisplayService, IHymnLyricsUIState, Size } from '@ccchymns.com/common';
import {
  NgMatTooltipModule,
  NgMaterialButtonModule,
} from '@ccchymns.com/angular';
import { CCCIconDirective } from '@ccchymns.com/ui';
import { LanguageResourceKey } from '../../i18n/language-resource-key';
import { DashboardLanguageResourceKey } from '../../../i18n/language-resource-key';
import { TABLE_PAGE_SIZE, SortOrder } from '../../../shared';
import { SubSink } from 'subsink';
import { HymnLyricsDataSource } from '../datasource/lyrics-datasource';
import { COLUMN_NAMES_FOR_LYRICS_TABLE } from '../data';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { EditLyricsDialogComponent } from '../edit-lyrics-dialog/edit-lyrics-dialog.component';

@Component({
  selector: 'app-lyrics-table',
  standalone: true,
  exportAs: 'lyricsTable',
  imports: [
    CdkTableModule,
    TranslocoModule,
    NgMaterialButtonModule,
    CCCIconDirective,
    NgMatTooltipModule,
  ],
  templateUrl: './lyrics-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LyricsTableComponent implements OnChanges {
  languageResourceKey = LanguageResourceKey;
  dashboardLanguageResourceKey = DashboardLanguageResourceKey;
  pagination = Array(0);
  private subscriptions = new SubSink();
  displayIsDesktop = false;

  @Input({ required: true }) data?: IHymnLyricsUIState[] | null;
  @Input() filterBy: string | undefined;
  columnNames: string[] = COLUMN_NAMES_FOR_LYRICS_TABLE;
  dataSource = new HymnLyricsDataSource([]);

  constructor(
    private displayService: DisplayService,
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector
  ) {
    this.getIsDeviceDisplayDesktopAsync();
  }

  editLyrics(lyrics: IHymnLyricsUIState) {
    this.subscriptions.sink = this.dialogs
      .open<IHymnLyricsUIState>(
        new PolymorpheusComponent(EditLyricsDialogComponent, this.injector),
        {
          data: lyrics,
          dismissible: true,
          appearance: 'bg-light',
        }
      )
      .subscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.filterBy && this.data) {
      this.dataSource.set(this.data);
      const paginationLength = this.data.length / TABLE_PAGE_SIZE;
      this.pagination = Array(
        paginationLength < 1 ? 0 : Math.ceil(paginationLength)
      );
    }

    if (this.filterBy) {
      this.filterTableData(this.filterBy);
    }
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

  filterTableData(filterBy: string) {
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
