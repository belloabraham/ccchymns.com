import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { LyricsDataService } from './lyrics.data.service';
import { IEditorsHymn, Route } from '@ccchymns.com/common';
import { filter } from 'rxjs';
import { SubSink } from 'subsink';
import { Unsubscribe } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { getHymnLyricsActionGroup } from 'apps/admin.ccchymns.com/src/store';

@Component({
  selector: 'app-lyrics',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LyricsComponent implements OnInit, OnDestroy {
  private subscriptions = new SubSink();
  @Input() editorsHymns: IEditorsHymn[] | null = null;
  unsubscribeFromLiveEditorsHymns!: Unsubscribe;

  constructor(
    private lyricsDataService: LyricsDataService,
    private router: Router,
    private ngrxStore: Store
  ) {}

  ngOnInit(): void {
    this.lyricsDataService.setEditorsHymn(this.editorsHymns);
    this.dispatchEditorsHymnLyricsActionState(this.editorsHymns);

    this.subscriptions.sink = this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        this.dispatchEditorsHymnLyricsActionState(
          this.lyricsDataService.getEditorsHymn()
        );
      });

    this.unsubscribeFromLiveEditorsHymns =
      this.lyricsDataService.getLiveListOfEditorsHymn(
        10000,
        (editorsHymns) => {
          this.lyricsDataService.setEditorsHymn(editorsHymns);
          this.dispatchEditorsHymnLyricsActionState(editorsHymns);
        },
        (error) => {}
      );
  }

  private dispatchEditorsHymnLyricsActionState(
    editorsHymns: IEditorsHymn[] | null | undefined
  ) {
    const basePath = `/${Route.LYRICS}`;
    if (this.router.isActive(`${basePath}/${Route.YORUBA}`, true)) {
      const yorubaLyricsUIState =
        this.lyricsDataService.getYorubaLyricsUIStates(editorsHymns);
      const yorubaLyricsAction = getHymnLyricsActionGroup().yorubaLyricsAction({
        hymnLyricsUIState: yorubaLyricsUIState,
      });
      this.ngrxStore.dispatch(yorubaLyricsAction);
    }

    //If active route is /lyrics/english
    if (this.router.isActive(`${basePath}/${Route.ENGLISH}`, true)) {
      const englishLyricsUIState =
        this.lyricsDataService.getEnglishLyricsUIStates(editorsHymns);
      const englishLyricsAction =
        getHymnLyricsActionGroup().englishLyricsAction({
          hymnLyricsUIState: englishLyricsUIState,
        });
      this.ngrxStore.dispatch(englishLyricsAction);
    }

    //If active route is /lyrics/french
    if (this.router.isActive(`${basePath}/${Route.FRENCH}`, true)) {
      const frenchLyricsUIState =
        this.lyricsDataService.getFrenchLyricsUIStates(editorsHymns);
      const frenchLyricsAction = getHymnLyricsActionGroup().frenchLyricsAction({
        hymnLyricsUIState: frenchLyricsUIState,
      });
      this.ngrxStore.dispatch(frenchLyricsAction);
    }

    //If active route is /lyrics/egun
    if (this.router.isActive(`${basePath}/${Route.EGUN}`, true)) {
      const egunLyricsUIState =
        this.lyricsDataService.getEgunLyricsUIStates(editorsHymns);
      const egunLyricsAction = getHymnLyricsActionGroup().egunLyricsAction({
        hymnLyricsUIState: egunLyricsUIState,
      });
      this.ngrxStore.dispatch(egunLyricsAction);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    this.unsubscribeFromLiveEditorsHymns();
  }
}
