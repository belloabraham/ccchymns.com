import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { CommonComponent } from '../shared/common/common.component';
import { LanguageResourceKey } from '../i18n/language-resource-key';
import { Store } from '@ngrx/store';
import { IHymnLyricsUIState } from '@ccchymns.com/common';
import { SubSink } from 'subsink';
import { getFrenchLyricsSelector } from 'apps/admin.ccchymns.com/src/store';

@Component({
  selector: 'app-lyrics-french',
  standalone: true,
  imports: [CommonComponent],
  templateUrl: './french.component.html',
  styleUrl: './french.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrenchComponent implements OnDestroy {
  titleKey = LanguageResourceKey.FRENCH_LYRICS;
  // data = HYMN_LYRICS_MOCK_DATA;
  private subscriptions = new SubSink();
  data?: IHymnLyricsUIState[] | null;

  constructor(private ngrxStore: Store) {
    this.subscriptions.sink = this.ngrxStore
      .select(getFrenchLyricsSelector())
      .subscribe((data) => {
        this.data = data;
      });
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
