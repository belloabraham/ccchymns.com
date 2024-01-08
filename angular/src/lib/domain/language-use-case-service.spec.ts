import { TestBed } from '@angular/core/testing';
import { LanguageUseCaseService } from './language-use-case.service';
import { LanguageResourceService } from '../i18n';
import { getTranslocoTestingModule } from '../mock/mock';

describe('LanguageUseCaseService', () => {
  let languageUseCaseService: LanguageUseCaseService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [LanguageUseCaseService, LanguageResourceService],
      imports: [getTranslocoTestingModule()],
    }).compileComponents();
    languageUseCaseService = TestBed.inject(LanguageUseCaseService);
  });

  it('it should create LanguageUseCaseService', () => {
    expect(languageUseCaseService).toBeTruthy();
  });
});
