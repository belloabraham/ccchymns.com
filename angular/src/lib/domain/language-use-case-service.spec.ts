import { TestBed } from '@angular/core/testing';
import { LanguageUseCaseService } from './language-use-case.service';
import { LanguageResourceService } from '../i18n';
import { HttpClientModule } from '@angular/common/http';

/* Integration Test */
describe('LanguageUseCaseService', () => {
  let languageUseCaseService: LanguageUseCaseService;
  let languageResourceService: LanguageResourceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [LanguageUseCaseService, LanguageResourceService],
      imports: [HttpClientModule],
    }).compileComponents();
    languageUseCaseService = TestBed.inject(LanguageUseCaseService);
    languageResourceService = TestBed.inject(LanguageResourceService);
  });

  it('it should create LanguageUseCaseService', () => {
    expect(languageUseCaseService).toBeTruthy();
  });

  it('it should create return the correct page title', () => {
    let pageTitle = '';
    languageResourceService.loadLanguageResource('en').subscribe(() => {
      pageTitle = languageUseCaseService.getPageTitle('dashboard');
    });
    expect(pageTitle).toBe('Dashboard - CCC Hymns');
  });
});
