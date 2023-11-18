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

const hymnLyricsUIState: HymnLyricsUIState = {
  no: 0,
  hymn: '',
};
export const COLUMN_NAMES = [...Object.keys(hymnLyricsUIState), 'tools'];

@Component({
  selector: 'app-lyrics-table',
  standalone: true,
  imports: [CdkTableModule, TranslocoModule],
  templateUrl: './lyrics-table.component.html',
  styleUrl: './lyrics-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LyricsTableComponent<T> implements OnInit {
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
