import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
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
  styleUrl: './egun.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EgunComponent implements OnDestroy {
  titleKey = LanguageResourceKey.EGUN_LYRICS;
  private subscriptions = new SubSink();

  data?: IHymnLyricsUIState[] | null; // HYMN_LYRICS_MOCK_DATA;
  constructor(
    private ngrxStore: Store,
    private lyricsDataService: LyricsDataService
  ) {
    this.subscriptions.sink = this.ngrxStore
      .select(getEgunLyricsSelector())
      .subscribe((data) => {
        this.data = data;
      });
  }

  retry() {
    this.data = undefined;
    this.lyricsDataService.getAllEditorsHymns$().subscribe((editorsHymns) => {
      this.lyricsDataService.setEditorsHymn(editorsHymns);
       const egunLyricsUIState =
         this.lyricsDataService.getEgunLyricsUIStates(editorsHymns);
       this.data = egunLyricsUIState;
    });
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
