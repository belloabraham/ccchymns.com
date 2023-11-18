import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { TranslocoModule } from '@ngneat/transloco';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HymnLyricsUIState } from '@ccchymns.com/common';
import { NgMatTooltipModule, NgMaterialButtonModule } from '@ccchymns.com/angular';
import { CCCIconDirective } from '@ccchymns.com/ui';
import { LanguageResourceKey } from '../../i18n/language-resource-key';
import { DashboardLanguageResourceKey } from '../../../i18n/language-resource-key';

const hymnLyricsUIState: HymnLyricsUIState = {
  no: 0,
  hymn: '',
};
export const COLUMN_NAMES = [...Object.keys(hymnLyricsUIState), 'tools'];

@Component({
  selector: 'app-lyrics-table',
  standalone: true,
  imports: [
    CdkTableModule,
    TranslocoModule,
    NgMaterialButtonModule,
    CCCIconDirective,
    NgMatTooltipModule,
  ],
  templateUrl: './lyrics-table.component.html',
  styleUrl: './lyrics-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LyricsTableComponent<T> implements OnInit {
  languageResourceKey = LanguageResourceKey;
  dashboardLanguageResourceKey = DashboardLanguageResourceKey;

  @Input({ required: true }) data: T[] = [];
  @Input() filterBy?: string;
  /**
   * Column names should be in small letter
   */
  @Input({ required: true }) columnNames: string[] = [];

  dataSource = new MatTableDataSource<T>();
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.dataSource.data = this.data;
  }

  trackByFn(index: number, item: any): any {
    return item.no;
  }

  filterTableData() {
    if (this.filterBy) {
      this.dataSource.filter = this.filterBy.trim().toLowerCase();
    }
  }
}
