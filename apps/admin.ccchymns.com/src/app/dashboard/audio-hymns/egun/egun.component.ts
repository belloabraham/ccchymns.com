import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { SharedModule } from '../../shared';
// import { AUDIO_HYMNS_MOC_DATA } from '../shared/mock/audio-hymns';
import { CommonComponent } from '../shared/common/common.component';
import { LanguageResourceKey } from '../i18n/language-resource-key';
import { SubSink } from 'subsink';
import { IAudioHymnsUIState } from '@ccchymns.com/common';
import { Store } from '@ngrx/store';
import { AudioHymnsDataService } from '../audio-hymns.data.service';
import { getEgunAudioHymnsSelector } from 'apps/admin.ccchymns.com/src/store';

@Component({
  selector: 'app-audio-egun',
  standalone: true,
  imports: [SharedModule, CommonComponent],
  templateUrl: './egun.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EgunComponent {
  titleKey = LanguageResourceKey.EGUN_AUDIO_HYMNS;
  private subscriptions = new SubSink();

  // data = AUDIO_HYMNS_MOC_DATA;
  data?: IAudioHymnsUIState[] | null;
  constructor(
    private ngrxStore: Store,
    private audioHymnsDataService: AudioHymnsDataService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscriptions.sink = this.ngrxStore
      .select(getEgunAudioHymnsSelector())
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
        const egunAudioHymnsUIState =
          this.audioHymnsDataService.getEgunAudioHymnsUIStates(
            editorsAudioHymns
          );
        this.data = egunAudioHymnsUIState;
        this.cdRef.detectChanges();
      });
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
