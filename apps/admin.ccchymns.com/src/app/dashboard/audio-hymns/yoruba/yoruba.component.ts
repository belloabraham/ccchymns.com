import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { SharedModule } from '../../shared';
import { CommonComponent } from '../shared/common/common.component';
// import { AUDIO_HYMNS_MOC_DATA as AUDIO_HYMNS_MOCK_DATA } from '../shared/mock/audio-hymns';
import { LanguageResourceKey } from '../i18n/language-resource-key';
import { SubSink } from 'subsink';
import { IAudioHymnsUIState } from '@ccchymns.com/common';
import { Store } from '@ngrx/store';
import { AudioHymnsDataService } from '../audio-hymns.data.service';
import { getYorubaAudioHymnsSelector } from 'apps/admin.ccchymns.com/src/store';

@Component({
  selector: 'app-audio-yoruba',
  standalone: true,
  imports: [SharedModule, CommonComponent],
  templateUrl: './yoruba.component.html',
  styleUrl: './yoruba.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YorubaComponent {
  titleKey = LanguageResourceKey.YORUBA_AUDIO_HYMNS;
  // data = AUDIO_HYMNS_MOCK_DATA;
  private subscriptions = new SubSink();

  data?: IAudioHymnsUIState[] | null;
  constructor(
    private ngrxStore: Store,
    private audioHymnsDataService: AudioHymnsDataService,
    private cdRef: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.subscriptions.sink = this.ngrxStore
      .select(getYorubaAudioHymnsSelector())
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
        const yorubaAudioHymnsUIState =
          this.audioHymnsDataService.getYorubaAudioHymnsUIStates(
            editorsAudioHymns
          );
        this.data = yorubaAudioHymnsUIState;
        this.cdRef.detectChanges();
      });
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
