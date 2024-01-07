import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLyricsDialogComponent } from './add-lyrics-dialog.component';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import {
  TranslocoTestingModule,
  TranslocoTestingOptions,
} from '@ngneat/transloco';
import en from '../../../../../assets/i18n/en.json';

export function getTranslocoTestingModule(
  options: TranslocoTestingOptions = {}
) {
  return TranslocoTestingModule.forRoot({
    langs: { en },
    translocoConfig: {
      availableLangs: ['en'],
      defaultLang: 'en',
    },
    preloadLangs: true,
    ...options,
  });
}

describe('AddLyricsDialogComponent', () => {
  let component: AddLyricsDialogComponent;
  let fixture: ComponentFixture<AddLyricsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddLyricsDialogComponent, getTranslocoTestingModule()],
      providers: [
        {
          provide: POLYMORPHEUS_CONTEXT,
          useValue: {},
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddLyricsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
