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
import { IHymnLyricsUIState } from '@ccchymns.com/common';
import { SubSink } from 'subsink';
import { getFrenchLyricsSelector } from 'apps/admin.ccchymns.com/src/store';
import { LyricsDataService } from '../lyrics.data.service';

@Component({
  selector: 'app-lyrics-french',
  standalone: true,
  imports: [CommonComponent],
  templateUrl: './french.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrenchComponent implements OnInit, OnDestroy {
  titleKey = LanguageResourceKey.FRENCH_LYRICS;
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
      .select(getFrenchLyricsSelector())
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
        const frenchLyricsUIState =
          this.lyricsDataService.getFrenchLyricsUIStates(editorsHymns);
        this.data = frenchLyricsUIState;
        this.cdRef.detectChanges();
      });
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
