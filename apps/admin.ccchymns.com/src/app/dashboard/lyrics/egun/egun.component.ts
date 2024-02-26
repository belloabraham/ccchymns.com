import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { CommonComponent } from '../shared/common/common.component';
import { LanguageResourceKey } from '../i18n/language-resource-key';
import { Store } from '@ngrx/store';
import { getEgunLyricsSelector } from 'apps/admin.ccchymns.com/src/store';
import { IHymnLyricsUIState } from '@ccchymns.com/common';
import { AsyncPipe } from '@angular/common';
import { SubSink } from 'subsink';

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
  constructor(private ngrxStore: Store) {
    this.subscriptions.sink = this.ngrxStore
      .select(getEgunLyricsSelector())
      .subscribe((data) => {
        this.data = data;
      });
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
