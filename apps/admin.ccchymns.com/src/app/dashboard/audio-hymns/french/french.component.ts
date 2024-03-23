import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { SharedModule } from '../../shared';
// import { AUDIO_HYMNS_MOC_DATA } from '../shared/mock/audio-hymns';
import { CommonComponent } from '../shared/common/common.component';
import { LanguageResourceKey } from '../i18n/language-resource-key';
import { SubSink } from 'subsink';
import { Store } from '@ngrx/store';
import { AudioHymnsDataService } from '../audio-hymns.data.service';
import { IAudioHymnsUIState } from '@ccchymns.com/common';
import { getFrenchAudioHymnsSelector } from '../../../../store';

@Component({
  selector: 'app-audio-french',
  standalone: true,
  imports: [SharedModule, CommonComponent],
  templateUrl: './french.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrenchComponent {
  titleKey = LanguageResourceKey.FRENCH_AUDIO_HYMNS;
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
      .select(getFrenchAudioHymnsSelector())
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
        const frenchAudioHymnsUIState =
          this.audioHymnsDataService.getFrenchAudioHymnsUIStates(
            editorsAudioHymns
          );
        this.data = frenchAudioHymnsUIState;
        this.cdRef.detectChanges();
      });
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
