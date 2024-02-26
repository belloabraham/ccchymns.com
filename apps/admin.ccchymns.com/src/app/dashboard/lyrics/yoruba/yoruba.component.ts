import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { CommonComponent } from '../shared/common/common.component';
import { LanguageResourceKey } from '../i18n/language-resource-key';
import { Store } from '@ngrx/store';
import { SubSink } from 'subsink';
import { IHymnLyricsUIState } from '@ccchymns.com/common';
import { getYorubaLyricsSelector } from 'apps/admin.ccchymns.com/src/store';

@Component({
  selector: 'app-lyrics-yoruba',
  standalone: true,
  imports: [CommonComponent],
  templateUrl: './yoruba.component.html',
  styleUrl: './yoruba.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YorubaComponent implements OnDestroy {
  titleKey = LanguageResourceKey.YORUBA_LYRICS;
  // data = HYMN_LYRICS_MOCK_DATA;
  private subscriptions = new SubSink();

  data?: IHymnLyricsUIState[] | null;
  constructor(private ngrxStore: Store) {
    this.subscriptions.sink = this.ngrxStore
      .select(getYorubaLyricsSelector())
      .subscribe((data) => {
        this.data = data;
      });
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
