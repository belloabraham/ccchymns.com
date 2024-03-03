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
import { SharedModule } from '@ccchymns.com/angular';
import { BibleReferencesDataService } from './bible-references.data.service';
import { SubSink } from 'subsink';
import { Unsubscribe } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import { IBibleReference, Route } from '@ccchymns.com/common';
import { getBibleReferencesActionGroup } from 'apps/admin.ccchymns.com/src/store';

@Component({
  selector: 'app-bible-references',
  standalone: true,
  imports: [SharedModule, RouterOutlet],
  templateUrl: './bible-references.component.html',
  providers: [BibleReferencesDataService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BibleReferencesComponent implements OnInit, OnDestroy {
  private subscriptions = new SubSink();
  unsubscribeFromLiveBibleReferences!: Unsubscribe;

  constructor(
    private bibleReferencesDataService: BibleReferencesDataService,
    private router: Router,
    private ngrxStore: Store,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const bibleReferences =
      this.activatedRoute.snapshot.data['bibleReferences'];

    this.bibleReferencesDataService.setBibleReferences(bibleReferences);
    this.dispatchBibleReferencesActionState(bibleReferences);

    this.subscriptions.sink = this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        this.dispatchBibleReferencesActionState(
          this.bibleReferencesDataService.getBibleReferences()
        );
      });

    this.unsubscribeFromLiveBibleReferences =
      this.bibleReferencesDataService.getLiveListOfBibleReferences(
        10000,
        (bibleReferences) => {
          this.bibleReferencesDataService.setBibleReferences(bibleReferences);
          this.dispatchBibleReferencesActionState(bibleReferences);
        },
        (error) => {}
      );
  }

  private dispatchBibleReferencesActionState(
    bibleReferences: IBibleReference[] | null | undefined
  ) {
    const basePath = `/${Route.BIBLE_REFERENCES}`;
    if (this.router.isActive(`${basePath}/${Route.YORUBA}`, true)) {
      const yorubaBibleReferenceUIState =
        this.bibleReferencesDataService.getYorubaBibleReferenceUIStates(
          bibleReferences
        );
      const yorubaBibleReferenceAction =
        getBibleReferencesActionGroup().yorubaBibleReferencesAction({
          bibleReferencesUIState: yorubaBibleReferenceUIState,
        });
      this.ngrxStore.dispatch(yorubaBibleReferenceAction);
    }

    //If active route is /bible-references/english
    if (this.router.isActive(`${basePath}/${Route.ENGLISH}`, true)) {
      const englishBibleReferenceUIState =
        this.bibleReferencesDataService.getEnglishBibleReferenceUIStates(
          bibleReferences
        );
      const englishBibleReferenceAction =
        getBibleReferencesActionGroup().englishBibleReferencesAction({
          bibleReferencesUIState: englishBibleReferenceUIState,
        });
      this.ngrxStore.dispatch(englishBibleReferenceAction);
    }

    //If active route is /bible-references/french
    if (this.router.isActive(`${basePath}/${Route.FRENCH}`, true)) {
      const frenchBibleReferenceUIState =
        this.bibleReferencesDataService.getFrenchBibleReferenceUIStates(
          bibleReferences
        );
      const frenchBibleReferenceAction =
        getBibleReferencesActionGroup().frenchBibleReferencesAction({
          bibleReferencesUIState: frenchBibleReferenceUIState,
        });
      this.ngrxStore.dispatch(frenchBibleReferenceAction);
    }

    //If active route is /bible-references/egun
    if (this.router.isActive(`${basePath}/${Route.EGUN}`, true)) {
      const egunBibleReferenceUIState =
        this.bibleReferencesDataService.getEgunBibleReferenceUIStates(
          bibleReferences
        );
      const egunBibleReferenceAction =
        getBibleReferencesActionGroup().egunBibleReferencesAction({
          bibleReferencesUIState: egunBibleReferenceUIState,
        });
      this.ngrxStore.dispatch(egunBibleReferenceAction);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    this.unsubscribeFromLiveBibleReferences();
  }
}
