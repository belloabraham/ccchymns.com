import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Injector,
  Input,
  OnInit,
} from '@angular/core';
import {
  EmptyStateComponent,
  ErrorStateComponent,
  SharedModule,
} from '../../../shared';
import {
  NgMatTooltipModule,
  NgMaterialButtonModule,
} from '@ccchymns.com/angular';
import { CCCIconDirective } from '@ccchymns.com/ui';
import { COLUMN_NAMES_FOR_AUDIO_HYMNS_TABLE } from '../data';
import { IAudioHymnsUIState } from '@ccchymns.com/common';
import { Observable } from 'rxjs';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { SubSink } from 'subsink';
import { AddAudioHymnDialogComponent, AudioHymnsPlaceholderComponent } from '../../../audio-hymns/shared';
import { AudioSpaceTableComponent } from '../audio-space-table/audio-space-table.component';
import { DashboardLanguageResourceKey } from '../../../i18n/language-resource-key';
import { LanguageResourceKey } from '../../i18n/language-resource-key';

@Component({
  selector: 'app-audio-space-common',
  standalone: true,
  imports: [
    SharedModule,
    CCCIconDirective,
    NgMaterialButtonModule,
    NgMatTooltipModule,
    EmptyStateComponent,
    ErrorStateComponent,
    AudioSpaceTableComponent,
  ],
  templateUrl: './common.component.html',
  styleUrl: './common.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonComponent implements OnInit {
  columnNames = COLUMN_NAMES_FOR_AUDIO_HYMNS_TABLE;
  languageResourceKey = LanguageResourceKey;
  dashboardLanguageResourceKey = DashboardLanguageResourceKey;
  filterBy?: string;
  sortOrderIsAscending = true;
  columnIdForSorting = COLUMN_NAMES_FOR_AUDIO_HYMNS_TABLE[0];
  @Input({ required: true }) titleKey!: string;
  @Input({ required: true }) data: IAudioHymnsUIState[] = [];
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
      new PolymorpheusComponent(AddAudioHymnDialogComponent, this.injector),
      {
        data: this.titleKey,
        dismissible: true,
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
}
