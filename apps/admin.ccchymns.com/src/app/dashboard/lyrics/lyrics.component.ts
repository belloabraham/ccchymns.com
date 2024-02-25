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
import { LoggerUtil } from '@ccchymns.com/core';

@Component({
  selector: 'app-lyrics',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.scss'],
  providers: [LyricsDataService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LyricsComponent implements OnInit, OnDestroy {
  @Input() editorsHymns!: IEditorsHymn[];
  private subscriptions = new SubSink();
  unsubscribeFromLiveEditorsHymns!: Unsubscribe;

  constructor(
    private lyricsDataService: LyricsDataService,
    private router: Router,
    private ngrxStore: Store
  ) {}

  ngOnInit(): void {
    this.subscriptions.sink = this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        if (this.editorsHymns) {
          this.dispatchEditorsHymnLyricsActionState(this.editorsHymns);
        }
      });

    this.unsubscribeFromLiveEditorsHymns =
      this.lyricsDataService.getLiveListOfEditorsHymn(
        (editorsHymns) => {
          if (editorsHymns) {
            this.editorsHymns = editorsHymns;
            this.dispatchEditorsHymnLyricsActionState(editorsHymns);
          }
        },
        (error) => {
          LoggerUtil.error(
            'LyricsComponent',
            this.dispatchEditorsHymnLyricsActionState.name,
            error
          );
        }
      );
  }

  private dispatchEditorsHymnLyricsActionState(editorsHymns: IEditorsHymn[]) {
    //If active route is /lyrics/yoruba
    if (this.router.isActive(`/${Route.LYRICS}/${Route.YORUBA}`, true)) {
      const yorubaLyricsUIState =
        this.lyricsDataService.getYorubaLyricsUIStates(editorsHymns);
      //TODO Dispatch action for yoruba lyrics
    }

    //If active route is /lyrics/english
    if (this.router.isActive(`/${Route.LYRICS}/${Route.ENGLISH}`, true)) {
      const englishLyricsUIState =
        this.lyricsDataService.getEnglishLyricsUIStates(editorsHymns);
      //TODO Dispatch action for yoruba lyrics
    }

    //If active route is /lyrics/french
    if (this.router.isActive(`/${Route.LYRICS}/${Route.FRENCH}`, true)) {
      const frenchLyricsUIState =
        this.lyricsDataService.getFrenchLyricsUIStates(editorsHymns);
      //TODO Dispatch action for yoruba lyrics
    }

    //If active route is /lyrics/egun
    if (this.router.isActive(`/${Route.LYRICS}/${Route.EGUN}`, true)) {
      const egunLyricsUIState =
        this.lyricsDataService.getEgunLyricsUIStates(editorsHymns);
      //TODO Dispatch action for yoruba lyrics
    }
  }

  ngOnDestroy(): void {
    this.unsubscribeFromLiveEditorsHymns();
  }
}
