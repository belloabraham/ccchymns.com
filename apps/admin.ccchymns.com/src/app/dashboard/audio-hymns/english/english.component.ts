import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../shared';
// import { AUDIO_HYMNS_MOC_DATA } from '../shared/mock/audio-hymns';
import { CommonComponent } from '../shared/common/common.component';
import { LanguageResourceKey } from '../i18n/language-resource-key';
import { IAudioHymnsUIState } from '@ccchymns.com/common';
import { SubSink } from 'subsink';
import { Store } from '@ngrx/store';
import { AudioHymnsDataService } from '../audio-hymns.data.service';
import { getEnglishAudioHymnsSelector } from 'apps/admin.ccchymns.com/src/store';

@Component({
  selector: 'app-audio-english',
  standalone: true,
  imports: [SharedModule, CommonComponent],
  templateUrl: './english.component.html',
  styleUrl: './english.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnglishComponent {
  titleKey = LanguageResourceKey.ENGLISH_AUDIO_HYMNS;
  // data = AUDIO_HYMNS_MOC_DATA;
  private subscriptions = new SubSink();

  data?: IAudioHymnsUIState[] | null;
  constructor(
    private ngrxStore: Store,
    private audioHymnsDataService: AudioHymnsDataService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscriptions.sink = this.ngrxStore
      .select(getEnglishAudioHymnsSelector())
      .subscribe((data) => {
        this.data = data;
        this.cdRef.detectChanges();
      });
  }

  retry() {
    this.data = undefined;
    this.subscriptions.sink = this.audioHymnsDataService
      .getAllEditorsAudioHymns$()
      .subscribe((editorsAudioHymns) => {
        this.audioHymnsDataService.setEditorsAudioHymns(editorsAudioHymns);
        const englishAudioHymnsUIState =
          this.audioHymnsDataService.getEnglishAudioHymnsUIStates(
            editorsAudioHymns
          );
        this.data = englishAudioHymnsUIState;
        this.cdRef.detectChanges();
      });
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
