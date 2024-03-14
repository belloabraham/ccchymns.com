import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  NgMatTooltipModule,
  NgMaterialButtonModule,
  SharedModule,
} from '@ccchymns.com/angular';
import { CCCIconDirective } from '@ccchymns.com/ui';
import { EmptyStateComponent, ErrorStateComponent } from '../shared';
import { DashboardLanguageResourceKey } from '../i18n/language-resource-key';
import {
  ALLHymnsType,
  IAllHymnsUIState,
  RootLanguageResourceKey,
} from '@ccchymns.com/common';
import { AllHymnsTableComponent } from './all-hymns-table/all-hymns-table.component';
import { SubSink } from 'subsink';
import { AllHymnsPlaceholderComponent } from './all-hymns-placeholder/all-hymns-placeholder.component';
import { COLUMN_NAMES_FOR_ALL_HYMNS_TABLE } from './data';
import { LanguageResourceKey } from './i18n/language-resource-key';
// import { ALL_HYMNS_MOCK_DATA } from './mock/all-hymns';
import { AllHymnsDataService } from './all-hymns.data.service';
import { LyricsDataService } from '../lyrics/lyrics.data.service';
import { Unsubscribe } from '@angular/fire/firestore';
import { AudioHymnsDataService } from '../audio-hymns/audio-hymns.data.service';
import { AudioSpaceDataService } from '../audio-space/audio-space.data.service';
import { TonicSolfaDataService } from '../tonic-solfa/tonic-solfa.data.service';
import { NotificationBuilder } from '@ccchymns.com/core';

@Component({
  selector: 'app-all-hymns',
  standalone: true,
  imports: [
    SharedModule,
    CCCIconDirective,
    NgMaterialButtonModule,
    NgMatTooltipModule,
    EmptyStateComponent,
    ErrorStateComponent,
    AllHymnsTableComponent,
    AllHymnsPlaceholderComponent,
  ],
  templateUrl: './all-hymns.component.html',
  styleUrls: ['./all-hymns.component.scss'],
  providers: [AllHymnsDataService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllHymnsComponent implements OnInit, OnDestroy {
  columnNames = COLUMN_NAMES_FOR_ALL_HYMNS_TABLE;
  languageResourceKey = LanguageResourceKey;
  rootLanguageResourceKey = RootLanguageResourceKey;
  dashboardLanguageResourceKey = DashboardLanguageResourceKey;
  filterBy?: string;
  sortOrderIsAscending = true;
  columnIdForSorting = COLUMN_NAMES_FOR_ALL_HYMNS_TABLE[0];
  @Input({ required: true }) titleKey!: string;
  @Input({ required: true }) data?: IAllHymnsUIState[] | null;
  private subscriptions = new SubSink();
  unsubscribeFromLiveEditorsHymns!: Unsubscribe;
  unsubscribeFromLiveEditorTonicSolfa!: Unsubscribe;
  unsubscribeFromLiveEditorsAudioSpace!: Unsubscribe;
  unsubscribeFromLiveEditorsAudioHymns!: Unsubscribe;

  readonly RETRY_TIMEOUT = 1000;

  constructor(
    private lyricsDataService: LyricsDataService,
    private tonicSolfaDataService: TonicSolfaDataService,
    private audioSpaceDataService: AudioSpaceDataService,
    private audioHymnsDataService: AudioHymnsDataService,
    private allHymnsDataService: AllHymnsDataService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscriptions.sink = this.allHymnsDataService
      .getAllHymnsUIState$()
      .subscribe((data) => {
        this.data = data;
        this.cdRef.detectChanges();
      });

    this.unsubscribeFromLiveEditorsHymns =
      this.lyricsDataService.getLiveListOfEditorsHymn(
        this.RETRY_TIMEOUT,
        (editorsHymns) => {
          this.allHymnsDataService.addDataToAllHymns(
            editorsHymns,
            ALLHymnsType.LYRIC
          );
        },
        (error) => {}
      );

    this.unsubscribeFromLiveEditorTonicSolfa =
      this.tonicSolfaDataService.getLiveListOfTonicSolfas(
        this.RETRY_TIMEOUT,
        (editorsTonicSolfas) => {
          this.allHymnsDataService.addDataToAllHymns(
            editorsTonicSolfas,
            ALLHymnsType.TONIC_SOLFA
          );
        },
        (error) => {}
      );

    this.unsubscribeFromLiveEditorsAudioHymns =
      this.audioHymnsDataService.getLiveListOfAudioHymns(
        this.RETRY_TIMEOUT,
        (editorsAudioHymns) => {
          this.allHymnsDataService.addDataToAllHymns(
            editorsAudioHymns,
            ALLHymnsType.AUDIO_HYMN
          );
        },
        (error) => {}
      );

    this.unsubscribeFromLiveEditorsAudioSpace =
      this.audioSpaceDataService.getLiveListOfAudioSpaces(
        this.RETRY_TIMEOUT,
        (editorsAudioSpaces) => {
          this.allHymnsDataService.addDataToAllHymns(
            editorsAudioSpaces,
            ALLHymnsType.AUDIO_SPACE
          );
        },
        (error) => {}
      );
  }

  publishHymns() {
    const unpublishedHymnIds =
      this.allHymnsDataService.getAllUnpublishedHymnIds();

      
    if (unpublishedHymnIds.length > 0) {

    } else {
      this.showPublishedSuccessNotification();
    }
  }

  showPublishedSuccessNotification() {
    new NotificationBuilder()
      .build()
      .success('All Hymns published successfully');
  }

  onFilterTextChanged(event: any) {
    this.filterBy = event.target.value;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  retry() {}

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    this.unsubscribeFromLiveEditorsHymns();
    this.unsubscribeFromLiveEditorTonicSolfa();
    this.unsubscribeFromLiveEditorsAudioHymns();
    this.unsubscribeFromLiveEditorsAudioSpace();
  }
}
