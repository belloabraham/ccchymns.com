import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
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
import { DashboardLanguageResourceKey } from '../../../i18n/language-resource-key';
import {
  IBibleReferenceUIState,
  RootLanguageResourceKey,
} from '@ccchymns.com/common';
import { LanguageResourceKey } from '../../i18n/language-resource-key';
import { COLUMN_NAMES_FOR_BIBLE_REFERENCES_TABLE } from '../data';
import { Inject, Injector } from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { AddBibleReferenceDialogComponent } from '../add-bible-reference-dialog/add-bible-reference-dialog.component';
import { BibleReferencesPlaceholderComponent } from '../bible-references-placeholder/bible-references-placeholder.component';
import { BibleReferencesTableComponent } from '../bible-references-table/bible-references-table.component';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-bible-reference-common',
  standalone: true,
  imports: [
    SharedModule,
    CCCIconDirective,
    NgMaterialButtonModule,
    NgMatTooltipModule,
    EmptyStateComponent,
    ErrorStateComponent,
    BibleReferencesTableComponent,
    BibleReferencesPlaceholderComponent,
  ],
  templateUrl: './common.component.html',
  styleUrl: './common.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonComponent implements OnDestroy {
  languageResourceKey = LanguageResourceKey;
  @Input({ required: true }) titleKey!: string;
  rootLanguageResourceKey = RootLanguageResourceKey;
  dashboardLanguageResourceKey = DashboardLanguageResourceKey;
  private subscriptions = new SubSink();

  columnNames = COLUMN_NAMES_FOR_BIBLE_REFERENCES_TABLE;
  filterBy?: string;
  @Input({ required: true }) data?: IBibleReferenceUIState[] | null;
  @Output() retry = new EventEmitter<void>();

  constructor(
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector
  ) {}


  onFilterTextChanged(event: any) {
    this.filterBy = event.target.value;
  }

  showAddBibleReferenceDialog() {
    this.subscriptions.sink = this.dialogs.open<string>(
      new PolymorpheusComponent(
        AddBibleReferenceDialogComponent,
        this.injector
      ),
      {
        data: this.titleKey,
        dismissible: false,
        appearance: 'bg-light',
      }
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
