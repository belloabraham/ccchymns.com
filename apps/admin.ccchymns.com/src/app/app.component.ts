import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import {
  ILanguageResourceService,
  LANGUAGE_RESOURCE_TOKEN,
  Language,
} from '@ccchymns.com/angular';
import { SubSink } from 'subsink';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import {
  LoadLanguageResourceActionState,
  getLoadLanguageResourceActionGroup,
} from '../store/actions/language-resource.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy, OnInit {
  private subscriptions = new SubSink();

  constructor(
    private ngrxStore: Store,
    @Inject(LANGUAGE_RESOURCE_TOKEN)
    private languageResourceService: ILanguageResourceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadLanguageResource(Language.ENGLISH, () => {
      this.onLanguageResourceLoaded();
    });
  }

  private loadLanguageResource(
    language: string,
    onLanguageResourceLoaded: () => void
  ) {
    this.subscriptions.sink = this.languageResourceService
      .loadLanguageResource(language)
      .subscribe(() => {
        onLanguageResourceLoaded();
      });
  }

  onLanguageResourceLoaded() {
    const loadLanguageResourceActionState: LoadLanguageResourceActionState = {
      loaded: true,
    };
    const loadLanguageResourceAction =
      getLoadLanguageResourceActionGroup().loadLanguageResourceAction(
        loadLanguageResourceActionState
      );
    this.ngrxStore.dispatch(loadLanguageResourceAction);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
