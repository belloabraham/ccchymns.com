import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Inject,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  Output,
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
// import { TONIC_SOLFA_MOCK_DATA } from './mock/audio-hymns';
import { Observable } from 'rxjs';
import { COLUMN_NAMES_FOR_TONIC_SOLFA_TABLE } from './data';
import { LanguageResourceKey } from './i18n/language-resource-key';
import { TonicSolfaDataService } from './tonic-solfa.data.service';
import { ActivatedRoute } from '@angular/router';
import { Unsubscribe } from '@angular/fire/firestore';

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
  providers: [TonicSolfaDataService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TonicSolfaComponent implements OnInit, OnDestroy {
  filterBy?: string;
  dashboardLanguageResourceKey = DashboardLanguageResourceKey;
  rootLanguageResourceKey = RootLanguageResourceKey;
  languageResourceKey = LanguageResourceKey;
  sortOrderIsAscending = true;
  columnNames = COLUMN_NAMES_FOR_TONIC_SOLFA_TABLE;
  columnIdForSorting = COLUMN_NAMES_FOR_TONIC_SOLFA_TABLE[0];
  private subscriptions = new SubSink();
  @Input() data?: ITonicSolfaUIState[] | null; // = TONIC_SOLFA_MOCK_DATA;
  unsubscribeFromLiveEditorTonicSolfa!: Unsubscribe;
  private dialog!: Observable<number>;

  constructor(
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector,
    private activatedRoute: ActivatedRoute,
    private tonicSolfaDataService: TonicSolfaDataService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const editorsTonicSolfas =
      this.activatedRoute.snapshot.data['editorsTonicSolfas'];

    this.data =
      this.tonicSolfaDataService.getTonicSolfaUIStates(editorsTonicSolfas);

    this.unsubscribeFromLiveEditorTonicSolfa =
      this.tonicSolfaDataService.getLiveListOfTonicSolfas(
        10000,
        (editorsTonicSolfas) => {
          this.data =
            this.tonicSolfaDataService.getTonicSolfaUIStates(
              editorsTonicSolfas
            );
          this.cdRef.detectChanges();
        },
        (error) => {}
      );

    this.dialog = this.dialogs.open<number>(
      new PolymorpheusComponent(TonicSolfaDialogComponent, this.injector),
      {
        data: this.rootLanguageResourceKey.TONIC_SOLFA,
        dismissible: false,
        appearance: 'bg-light',
      }
    );
  }

  retry() {
    this.data = undefined;
    this.subscriptions.sink = this.tonicSolfaDataService
      .getAllEditorsTonicSolfas$()
      .subscribe((editorsTonicSolfas) => {
        const tonicSolfasUIState =
          this.tonicSolfaDataService.getTonicSolfaUIStates(
            editorsTonicSolfas
          );
        this.data = tonicSolfasUIState;
        this.cdRef.detectChanges();
      });
  }

  showDialog(): void {
    this.subscriptions.sink = this.dialog.subscribe();
  }

  onFilterTextChanged(event: any) {
    this.filterBy = event.target.value;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    this.unsubscribeFromLiveEditorTonicSolfa();
  }
}
