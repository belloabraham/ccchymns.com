import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EmptyStateComponent, SharedModule } from '../../../shared';
import { CCCIconDirective } from '@ccchymns.com/ui';
import {
  NgMatTooltipModule,
  NgMaterialButtonModule,
} from '@ccchymns.com/angular';
import { ErrorStateComponent } from '../../../shared/error-state/error-state.component';
import { DashboardLanguageResourceKey } from '../../../i18n/language-resource-key';
import {
  BibleReferenceUIState,
  RootLanguageResourceKey,
} from '@ccchymns.com/common';
import { LanguageResourceKey } from '../../i18n/language-resource-key';
import { BibleReferencesTableComponent } from '../bible-references-table/bible-references-table.component';
import { BibleReferencesPlaceholderComponent } from '../bible-references-placeholder/bible-references-placeholder.component';
import { COLUMN_NAMES_FOR_BIBLE_REFERENCES_TABLE } from '../data';
import { Inject, Injector } from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { Observable } from 'rxjs';
import { AddBibleReferenceDialogComponent } from '../add-bible-reference-dialog/add-bible-reference-dialog.component';
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
    BibleReferencesPlaceholderComponent,
  ],
  templateUrl: './common.component.html',
  styleUrl: './common.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonComponent {
  languageResourceKey = LanguageResourceKey;
  @Input({ required: true }) titleKey!: string;
  rootLanguageResourceKey = RootLanguageResourceKey;
  dashboardLanguageResourceKey = DashboardLanguageResourceKey;

  columnNames = COLUMN_NAMES_FOR_BIBLE_REFERENCES_TABLE;
  filterBy?: string;
  @Input({ required: true }) data: BibleReferenceUIState[] = [];
  private dialog!: Observable<number>;

  constructor(
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector
  ) {}

  onFilterTextChanged(event: any) {
    this.filterBy = event.target.value;
  }

  openAddBibleReferenceDialog() {
    this.dialog = this.dialogs.open<number>(
      new PolymorpheusComponent(
        AddBibleReferenceDialogComponent,
        this.injector
      ),
      {
        data: this.titleKey,
        dismissible: true,
        appearance: 'bg-light',
      }
    );
  }

  retry() {}
}
