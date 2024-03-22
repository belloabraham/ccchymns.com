import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAudioSpaceDialogComponent } from './add-audio-space-dialog.component';
import {
  TranslocoTestingModule,
  TranslocoTestingOptions,
} from '@ngneat/transloco';
import en from '../../../../../assets/i18n/en.json';
import { DialogModule } from '../../../shared/dialog.module';

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

describe('AddAudioSpaceDialogComponent', () => {
  let component: AddAudioSpaceDialogComponent;
  let fixture: ComponentFixture<AddAudioSpaceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AddAudioSpaceDialogComponent,
        DialogModule,
        getTranslocoTestingModule(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddAudioSpaceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
