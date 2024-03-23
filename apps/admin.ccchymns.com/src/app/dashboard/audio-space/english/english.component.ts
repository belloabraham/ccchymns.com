import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { SharedModule } from '../../shared';
// import { AUDIO_SPACE_MOCK_DATA } from '../shared/mock/audio-space';
import { CommonComponent } from '../shared/common/common.component';
import {
  IAudioSpaceUIState,
  RootLanguageResourceKey,
} from '@ccchymns.com/common';
import { AudioSpaceDataService } from '../audio-space.data.service';
import { Store } from '@ngrx/store';
import { SubSink } from 'subsink';
import { getEnglishAudioSpaceSelector } from '../../../../store';

@Component({
  selector: 'app-audio-space-english',
  standalone: true,
  imports: [SharedModule, CommonComponent],
  templateUrl: './english.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnglishComponent implements OnInit, OnDestroy {
  titleKey = RootLanguageResourceKey.AUDIO_SPACE;
  private subscriptions = new SubSink();

  // data = AUDIO_SPACE_MOCK_DATA;
  data?: IAudioSpaceUIState[] | null;
  constructor(
    private ngrxStore: Store,
    private audioSpaceDataService: AudioSpaceDataService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscriptions.sink = this.ngrxStore
      .select(getEnglishAudioSpaceSelector())
      .subscribe((data) => {
        this.data = data;
        this.cdRef.detectChanges();
      });
  }

  retry() {
    this.data = undefined;
    this.subscriptions.sink = this.audioSpaceDataService
      .getAllEditorsAudioSpaces$()
      .subscribe((editorsAudioSpaces) => {
        this.audioSpaceDataService.setEditorsAudioSpaces(editorsAudioSpaces);
        const englishAudioSpacesUIState =
          this.audioSpaceDataService.getEnglishAudioSpaceUIStates(
            editorsAudioSpaces
          );
        this.data = englishAudioSpacesUIState;
        this.cdRef.detectChanges();
      });
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
