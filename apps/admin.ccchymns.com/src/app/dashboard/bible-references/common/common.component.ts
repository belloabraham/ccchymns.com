import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { EmptyStateComponent, ErrorStateComponent, SharedModule } from '../../shared';
import { CCCIconDirective } from '@ccchymns.com/ui';
import {
  NgMatTooltipModule,
  NgMaterialButtonModule,
} from '@ccchymns.com/angular';
import { DashboardLanguageResourceKey } from '../../i18n/language-resource-key';
import {
  BibleReferenceUIState,
  RootLanguageResourceKey,
} from '@ccchymns.com/common';
import { LanguageResourceKey } from '../i18n/language-resource-key';
import { COLUMN_NAMES_FOR_BIBLE_REFERENCES_TABLE } from '../shared/data';
import { Inject, Injector } from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { Observable } from 'rxjs';
import { AddBibleReferenceDialogComponent, BibleReferencesPlaceholderComponent, BibleReferencesTableComponent } from '../shared';

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
export class CommonComponent implements OnInit {
  languageResourceKey = LanguageResourceKey;
  @Input({ required: true }) titleKey!: string;
  rootLanguageResourceKey = RootLanguageResourceKey;
  dashboardLanguageResourceKey = DashboardLanguageResourceKey;

  columnNames = COLUMN_NAMES_FOR_BIBLE_REFERENCES_TABLE;
  filterBy?: string;
  @Input({ required: true }) data: BibleReferenceUIState[] = [];
  private dialog!: Observable<string>;

  constructor(
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector
  ) {}

  ngOnInit(): void {
    this.dialog = this.dialogs.open<string>(
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

  onFilterTextChanged(event: any) {
    this.filterBy = event.target.value;
  }

  openAddBibleReferenceDialog() {
    this.dialog.subscribe({
      next: (data) => {
        console.info(`Dialog emitted data = ${data}`);
      },
      complete: () => {
        console.info('Dialog closed');
      },
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  retry() {}
}
