import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { AudioSpaceDataService } from './audio-space.data.service';
import { Unsubscribe } from '@angular/fire/firestore';
import { SubSink } from 'subsink';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import {  IEditorsAudioSpace, Route } from '@ccchymns.com/common';
import { getAudioSpaceActionGroup } from '../../../store';
@Component({
  selector: 'app-audio-space',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './audio-space.component.html',
  styleUrls: ['./audio-space.component.scss'],
  providers: [AudioSpaceDataService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudioSpaceComponent implements OnInit, OnDestroy {
  private subscriptions = new SubSink();
  unsubscribeFromLiveEditorsAudioSpace!: Unsubscribe;

  constructor(
    private audioSpaceDataService: AudioSpaceDataService,
    private router: Router,
    private ngrxStore: Store,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const editorsAudioSpaces =
      this.activatedRoute.snapshot.data['editorsAudioSpaces'];

    this.audioSpaceDataService.setEditorsAudioSpaces(editorsAudioSpaces);
    this.dispatchEditorsAudioSpaceActionState(editorsAudioSpaces);

    this.subscriptions.sink = this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        this.dispatchEditorsAudioSpaceActionState(
          this.audioSpaceDataService.getEditorsAudioSpaces()
        );
      });

    this.unsubscribeFromLiveEditorsAudioSpace =
      this.audioSpaceDataService.getLiveListOfAudioSpaces(
        10000,
        (editorsAudioSpaces) => {
          this.audioSpaceDataService.setEditorsAudioSpaces(editorsAudioSpaces);
          this.dispatchEditorsAudioSpaceActionState(editorsAudioSpaces);
        },
        (error) => {}
      );
  }

  private dispatchEditorsAudioSpaceActionState(
    editorsAudioSpaces: IEditorsAudioSpace[] | null | undefined
  ) {
    const basePath = `/${Route.AUDIO_SPACE}`;
    if (this.router.isActive(`${basePath}/${Route.ENGLISH}`, true)) {
      const englishAudioSpaceUIState =
        this.audioSpaceDataService.getEnglishAudioSpaceUIStates(
          editorsAudioSpaces
        );
      const englishAudioSpaceAction =
        getAudioSpaceActionGroup().englishAudioSpaceAction({
          audioSpaceUIState: englishAudioSpaceUIState,
        });
      this.ngrxStore.dispatch(englishAudioSpaceAction);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    this.unsubscribeFromLiveEditorsAudioSpace();
  }
}
