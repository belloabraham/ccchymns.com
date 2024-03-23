import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { AudioHymnsDataService } from './audio-hymns.data.service';
import { SubSink } from 'subsink';
import { Unsubscribe } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import { IEditorsAudioHymn, Route } from '@ccchymns.com/common';
import { getAudioHymnsActionGroup } from '../../../store';

@Component({
  selector: 'app-audio-hymns',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './audio-hymns.component.html',
  styleUrl: './audio-hymns.component.scss',
  providers: [AudioHymnsDataService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudioHymnsComponent implements OnInit, OnDestroy {
  private subscriptions = new SubSink();
  unsubscribeFromLiveEditorsAudioHymns!: Unsubscribe;

  constructor(
    private audioHymnsDataService: AudioHymnsDataService,
    private router: Router,
    private ngrxStore: Store,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const editorsAudioHymns =
      this.activatedRoute.snapshot.data['editorsAudioHymns'];
    this.audioHymnsDataService.setEditorsAudioHymns(editorsAudioHymns);
    this.dispatchEditorsAudioHymnsActionState(editorsAudioHymns);

    this.subscriptions.sink = this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        this.dispatchEditorsAudioHymnsActionState(
          this.audioHymnsDataService.getEditorsAudioHymns()
        );
      });

    this.unsubscribeFromLiveEditorsAudioHymns =
      this.audioHymnsDataService.getLiveListOfAudioHymns(
        10000,
        (editorsAudioHymns) => {
          this.audioHymnsDataService.setEditorsAudioHymns(editorsAudioHymns);
          this.dispatchEditorsAudioHymnsActionState(editorsAudioHymns);
        },
        (error) => {}
      );
  }

  private dispatchEditorsAudioHymnsActionState(
    editorsAudioHymns: IEditorsAudioHymn[] | null | undefined
  ) {
    const basePath = `/${Route.AUDIO_HYMNS}`;
    if (this.router.isActive(`${basePath}/${Route.YORUBA}`, true)) {
      const yorubaAudioHymnsUIState =
        this.audioHymnsDataService.getYorubaAudioHymnsUIStates(
          editorsAudioHymns
        );
      const yorubaAudioHymnsAction =
        getAudioHymnsActionGroup().yorubaAudioHymnsAction({
          audioHymnsUIState: yorubaAudioHymnsUIState,
        });
      this.ngrxStore.dispatch(yorubaAudioHymnsAction);
    }

    //If active route is /audio-hymns/english
    if (this.router.isActive(`${basePath}/${Route.ENGLISH}`, true)) {
      const englishAudioHymnsUIState =
        this.audioHymnsDataService.getEnglishAudioHymnsUIStates(
          editorsAudioHymns
        );
      const englishAudioHymnsAction =
        getAudioHymnsActionGroup().englishAudioHymnsAction({
          audioHymnsUIState: englishAudioHymnsUIState,
        });
      this.ngrxStore.dispatch(englishAudioHymnsAction);
    }

    //If active route is /audio-hymns/french
    if (this.router.isActive(`${basePath}/${Route.FRENCH}`, true)) {
      const frenchAudioHymnsUIState =
        this.audioHymnsDataService.getFrenchAudioHymnsUIStates(
          editorsAudioHymns
        );
      const frenchAudioHymnsAction =
        getAudioHymnsActionGroup().frenchAudioHymnsAction({
          audioHymnsUIState: frenchAudioHymnsUIState,
        });
      this.ngrxStore.dispatch(frenchAudioHymnsAction);
    }

    //If active route is /audio-hymns/egun
    if (this.router.isActive(`${basePath}/${Route.EGUN}`, true)) {
      const egunAudioHymnsUIState =
        this.audioHymnsDataService.getEgunAudioHymnsUIStates(editorsAudioHymns);
      const egunAudioHymnsAction =
        getAudioHymnsActionGroup().egunAudioHymnsAction({
          audioHymnsUIState: egunAudioHymnsUIState,
        });
      this.ngrxStore.dispatch(egunAudioHymnsAction);
    }
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    this.unsubscribeFromLiveEditorsAudioHymns();
  }
}
