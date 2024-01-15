import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  EmptyStateComponent,
  ErrorStateComponent,
  SharedModule,
} from '../../../shared';
import { CCCIconDirective } from '@ccchymns.com/ui';
import {
  NgMatTooltipModule,
  NgMaterialButtonModule,
} from '@ccchymns.com/angular';
import {
  IHymnLyricsUIState,
  RootLanguageResourceKey,
} from '@ccchymns.com/common';
import { LanguageResourceKey } from '../../i18n/language-resource-key';
import { DashboardLanguageResourceKey } from '../../../i18n/language-resource-key';
import { LyricsPlaceholderComponent } from '../lyrics-placeholder/lyrics-placeholder.component';
import { LyricsTableComponent } from '../lyrics-table/lyrics-table.component';
import { COLUMN_NAMES_FOR_LYRICS_TABLE } from '../data';
import { Inject, Injector } from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { AddLyricsDialogComponent } from '../add-lyrics-dialog/add-lyrics-dialog.component';
import { Observable } from 'rxjs';
import { SubSink } from 'subsink';

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
    EmptyStateComponent,
    ErrorStateComponent,
  ],
  templateUrl: './common.component.html',
  styleUrl: './common.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonComponent implements OnInit, OnDestroy {
  columnNames = COLUMN_NAMES_FOR_LYRICS_TABLE;
  languageResourceKey = LanguageResourceKey;
  rootLanguageResourceKey = RootLanguageResourceKey;
  dashboardLanguageResourceKey = DashboardLanguageResourceKey;
  filterBy?: string;
  sortOrderIsAscending = true;
  columnIdForSorting = COLUMN_NAMES_FOR_LYRICS_TABLE[0];
  @Input({ required: true }) titleKey!: string;
  @Input({ required: true }) data: IHymnLyricsUIState[] = [];
  private subscriptions = new SubSink();

  onFilterTextChanged(event: any) {
    this.filterBy = event.target.value;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  retry() {}

  private dialog!: Observable<number>;

  constructor(
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector
  ) {}

  ngOnInit(): void {
    this.dialog = this.dialogs.open<number>(
      new PolymorpheusComponent(AddLyricsDialogComponent, this.injector),
      {
        data: this.titleKey,
        dismissible: false,
        appearance: 'bg-light',
      }
    );
  }

  showDialog(): void {
    this.subscriptions.sink = this.dialog.subscribe({
      next: (data) => {
        console.info(`Dialog emitted data = ${data}`);
      },
      complete: () => {
        console.info('Dialog closed');
      },
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
