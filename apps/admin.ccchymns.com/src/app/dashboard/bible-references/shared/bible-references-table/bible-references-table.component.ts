import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgZone,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { TranslocoModule } from '@ngneat/transloco';
import {
  IBibleReferenceUIState,
  DisplayService,
  Size,
} from '@ccchymns.com/common';
import {
  NgMatTooltipModule,
  NgMaterialButtonModule,
} from '@ccchymns.com/angular';
import { CCCIconDirective } from '@ccchymns.com/ui';
import { SubSink } from 'subsink';
import { COLUMN_NAMES_FOR_BIBLE_REFERENCES_TABLE } from '../data';
import { DashboardLanguageResourceKey } from '../../../i18n/language-resource-key';
import { LanguageResourceKey } from '../../i18n/language-resource-key';
import { TABLE_PAGE_SIZE } from '../../../shared';
import { BibleReferenceDataSource } from '../datasource/bible-reference-datasource';
import {
  AlertDialog,
  LoggerUtil,
  NotificationBuilder,
} from '@ccchymns.com/core';
import { BibleReferencesDataService } from '../../bible-references.data.service';

@Component({
  selector: 'app-bible-references-table',
  standalone: true,
  exportAs: 'bibleReferenceTable',
  imports: [
    CdkTableModule,
    TranslocoModule,
    NgMaterialButtonModule,
    CCCIconDirective,
    NgMatTooltipModule,
  ],
  templateUrl: './bible-references-table.component.html',
  styleUrl: './bible-references-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BibleReferencesTableComponent implements OnChanges {
  languageResourceKey = LanguageResourceKey;
  dashboardLanguageResourceKey = DashboardLanguageResourceKey;
  pagination = Array(0);
  private subscriptions = new SubSink();
  displayIsDesktop = false;

  @Input({ required: true }) data?: IBibleReferenceUIState[] | null;
  @Input() filterBy: string | undefined;
  columnNames: string[] = COLUMN_NAMES_FOR_BIBLE_REFERENCES_TABLE;
  dataSource = new BibleReferenceDataSource([]);

  constructor(
    private displayService: DisplayService,
    private ngZone: NgZone,
    private bibleReferencesDataService: BibleReferencesDataService
  ) {
    this.getIsDeviceDisplayDesktopAsync();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.data) {
      this.dataSource = new BibleReferenceDataSource(this.data);
      const paginationLength = this.data.length / TABLE_PAGE_SIZE;
      this.pagination = Array(
        paginationLength < 1 ? 0 : Math.ceil(paginationLength)
      );
    }
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
    return item.reference;
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

  deleteABibleReference(reference: string) {
    AlertDialog.warn(
      `Are you sure you want to delete ${reference}?`,
      'Delete Bible Reference',
      'Yes',
      'No',
      () => {
        this.ngZone.run(() => {
          this.bibleReferencesDataService
            .deleteABibleReference(reference)
            .then(() => {
              new NotificationBuilder()
                .build()
                .success(`${reference} was deleted successfully`);
            })
            .catch((error) => {
              new NotificationBuilder().build().error(
                `Oops unable to delete ${reference} at the moment, try again later
                Error: ${error.message}
              `
              );
              LoggerUtil.error(this, this.deleteABibleReference.name, error);
            });
        });
      }
    );
  }
}
