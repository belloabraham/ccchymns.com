import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBibleReferenceDialogComponent } from './add-bible-reference-dialog.component';
import { SharedModule } from '../../../shared';
import {
  NgMaterialButtonModule,
} from '@ccchymns.com/angular';
import { TextFieldModule } from '@angular/cdk/text-field';
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

describe('AddBibleReferenceDialogComponent', () => {
  let component: AddBibleReferenceDialogComponent;
  let fixture: ComponentFixture<AddBibleReferenceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AddBibleReferenceDialogComponent,
        SharedModule,
        NgMaterialButtonModule,
        TextFieldModule,
        getTranslocoTestingModule(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddBibleReferenceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
