import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Injector,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { DashboardLanguageResourceKey } from '../i18n/language-resource-key';
import {
  NgMatTooltipModule,
  NgMaterialButtonModule,
} from '@ccchymns.com/angular';
import {
  EmptyStateComponent,
  ErrorStateComponent,
  SharedModule,
} from '../shared';
import { CCCIconDirective } from '@ccchymns.com/ui';
import { TonicSolfaPlaceholderComponent } from './tonic-solfa-placeholder/tonic-solfa-placeholder.component';
import { TonicSolfaTableComponent } from './tonic-solfa-table/tonic-solfa-table.component';
import {
  ITonicSolfaUIState,
  RootLanguageResourceKey,
} from '@ccchymns.com/common';
import { SubSink } from 'subsink';
import { TuiDialogService } from '@taiga-ui/core';
import { TonicSolfaDialogComponent } from './tonic-solfa-dialog/tonic-solfa-dialog.component';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { TONIC_SOLFA_MOCK_DATA } from './mock/audio-hymns';
import { Observable } from 'rxjs';
import { COLUMN_NAMES_FOR_TONIC_SOLFA_TABLE } from './data';
import { LanguageResourceKey } from './i18n/language-resource-key';

@Component({
  selector: 'app-tonic-solfa',
  standalone: true,
  imports: [
    SharedModule,
    CCCIconDirective,
    NgMaterialButtonModule,
    NgMatTooltipModule,
    TonicSolfaPlaceholderComponent,
    EmptyStateComponent,
    ErrorStateComponent,
    TonicSolfaTableComponent,
  ],
  templateUrl: './tonic-solfa.component.html',
  styleUrls: ['./tonic-solfa.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TonicSolfaComponent implements OnInit, OnDestroy {
  filterBy?: string;
  dashboardLanguageResourceKey = DashboardLanguageResourceKey;
  rootLanguageResourceKey = RootLanguageResourceKey;
  languageResourceKey = LanguageResourceKey;
  sortOrderIsAscending = true;
  columnIdForSorting = COLUMN_NAMES_FOR_TONIC_SOLFA_TABLE[0];
  private subscriptions = new SubSink();
  @Input({ required: true }) data: ITonicSolfaUIState[] = TONIC_SOLFA_MOCK_DATA;

  private dialog!: Observable<number>;

  constructor(
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector
  ) {}

  ngOnInit(): void {
    this.dialog = this.dialogs.open<number>(
      new PolymorpheusComponent(TonicSolfaDialogComponent, this.injector),
      {
        data: this.rootLanguageResourceKey.TONIC_SOLFA,
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

  onFilterTextChanged(event: any) {
    this.filterBy = event.target.value;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
