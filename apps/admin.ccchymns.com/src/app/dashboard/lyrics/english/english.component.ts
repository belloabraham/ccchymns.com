import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { CommonComponent } from '../shared/common/common.component';
import { LanguageResourceKey } from '../i18n/language-resource-key';
import { Store } from '@ngrx/store';
import { SubSink } from 'subsink';
import { IHymnLyricsUIState } from '@ccchymns.com/common';
import { getEnglishLyricsSelector } from 'apps/admin.ccchymns.com/src/store';

@Component({
  selector: 'app-lyrics-english',
  standalone: true,
  imports: [CommonComponent],
  templateUrl: './english.component.html',
  styleUrl: './english.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnglishComponent implements OnDestroy {
  titleKey = LanguageResourceKey.ENGLISH_LYRICS;
  // data = HYMN_LYRICS_MOCK_DATA;
  private subscriptions = new SubSink();

  data?: IHymnLyricsUIState[] | null;
  constructor(private ngrxStore: Store) {
    this.subscriptions.sink = this.ngrxStore
      .select(getEnglishLyricsSelector())
      .subscribe((data) => {
        this.data = data;
      });
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
