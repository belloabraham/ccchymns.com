import { HttpClientModule } from '@angular/common/http';
import { TranslocoLoaderService } from './transloco-loader.service';
import { TestBed } from '@angular/core/testing';

/* Integration Test */

describe('TranslocoLoaderService', () => {
  let translocoLoaderService: TranslocoLoaderService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [TranslocoLoaderService],
      imports: [HttpClientModule],
    }).compileComponents();
    translocoLoaderService = TestBed.inject(TranslocoLoaderService);
  });

  it('It should load translation', () => {
    translocoLoaderService.getTranslation('en').subscribe((translation) => {
      expect(translation).toBeTruthy();
    });
  });
});
