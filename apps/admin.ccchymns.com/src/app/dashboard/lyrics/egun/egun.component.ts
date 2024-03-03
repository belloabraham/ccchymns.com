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
import { getEgunLyricsSelector } from 'apps/admin.ccchymns.com/src/store';
import { IHymnLyricsUIState } from '@ccchymns.com/common';
import { AsyncPipe } from '@angular/common';
import { SubSink } from 'subsink';
import { LyricsDataService } from '../lyrics.data.service';

@Component({
  selector: 'app-lyrics-egun',
  standalone: true,
  imports: [CommonComponent, AsyncPipe],
  templateUrl: './egun.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EgunComponent implements OnInit, OnDestroy {
  titleKey = LanguageResourceKey.EGUN_LYRICS;
  private subscriptions = new SubSink();

  data?: IHymnLyricsUIState[] | null; // HYMN_LYRICS_MOCK_DATA;
  constructor(
    private ngrxStore: Store,
    private lyricsDataService: LyricsDataService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscriptions.sink = this.ngrxStore
      .select(getEgunLyricsSelector())
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
        const egunLyricsUIState =
          this.lyricsDataService.getEgunLyricsUIStates(editorsHymns);
        this.data = egunLyricsUIState;
        this.cdRef.detectChanges();
      });
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
