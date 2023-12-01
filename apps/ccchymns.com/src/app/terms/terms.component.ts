import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import {
  ILanguageResourceService,
  LANGUAGE_RESOURCE_TOKEN,
  Language,
  LanguageUseCaseService,
  SharedModule,
} from '@ccchymns.com/angular';
import { Title } from '@angular/platform-browser';
import { SubSink } from 'subsink';
import { LanguageResourceKey } from './i18n/language-resource-key';
import { NavigationComponent } from '../navigation/navigation.component';
import { HeaderComponent } from '../header/header.component';
import { TranslocoModule } from '@ngneat/transloco';
import { RootLanguageResourceKey } from '../i18n/language-resource-key';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [
    SharedModule,
    NavigationComponent,
    HeaderComponent,
    TranslocoModule,
  ],
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TermsComponent implements OnInit {
  private subscriptions = new SubSink();
  rootLanguageResourceKey = RootLanguageResourceKey;

  constructor(
    @Inject(LANGUAGE_RESOURCE_TOKEN)
    private languageResourceService: ILanguageResourceService,
    private title: Title,
    private languageUseCaseService: LanguageUseCaseService
  ) {}
  ngOnInit(): void {
    this.subscriptions.sink = this.languageResourceService
      .getLanguageLoadSuccessfully$()
      .subscribe(() => {
        const pageTitle = this.languageUseCaseService.getPageTitle(
          LanguageResourceKey.PAGE_TITLE,
          Language.APP_NAME
        );
        this.title.setTitle(pageTitle);
      });
  }
}
