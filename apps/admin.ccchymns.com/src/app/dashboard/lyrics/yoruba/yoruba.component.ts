import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonComponent } from '../shared/common/common.component';
import { LanguageResourceKey } from '../i18n/language-resource-key';
import { Store } from '@ngrx/store';
import { SubSink } from 'subsink';
import { IHymnLyricsUIState } from '@ccchymns.com/common';
import { getYorubaLyricsSelector } from '../../../../store';
import { LyricsDataService } from '../lyrics.data.service';

@Component({
  selector: 'app-lyrics-yoruba',
  standalone: true,
  imports: [CommonComponent],
  templateUrl: './yoruba.component.html',
  styleUrl: './yoruba.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YorubaComponent implements OnInit, OnDestroy {
  titleKey = LanguageResourceKey.YORUBA_LYRICS;
  // data = HYMN_LYRICS_MOCK_DATA;
  private subscriptions = new SubSink();

  data?: IHymnLyricsUIState[] | null;
  constructor(
    private ngrxStore: Store,
    private lyricsDataService: LyricsDataService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscriptions.sink = this.ngrxStore
      .select(getYorubaLyricsSelector())
      .subscribe((data) => {
        this.data = data;
        this.cdRef.detectChanges();
      });
  }

  retry() {
    this.data = undefined;
    this.subscriptions.sink = this.lyricsDataService
      .getAllEditorsHymns$()
      .subscribe((editorsHymns) => {
        this.lyricsDataService.setEditorsHymn(editorsHymns);
        const yorubaLyricsUIState =
          this.lyricsDataService.getYorubaLyricsUIStates(editorsHymns);
        this.data = yorubaLyricsUIState;
        this.cdRef.detectChanges();
      });
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
