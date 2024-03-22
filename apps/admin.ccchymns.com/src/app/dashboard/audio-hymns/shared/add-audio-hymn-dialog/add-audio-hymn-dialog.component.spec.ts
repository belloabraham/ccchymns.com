import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAudioHymnDialogComponent } from './add-audio-hymn-dialog.component';
import { NgMaterialButtonModule } from '@ccchymns.com/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DialogModule } from '../../../shared/dialog.module';
import { TranslocoTestingModule } from '@ngneat/transloco';

describe('AddAudioHymnDialogComponent', () => {
  let component: AddAudioHymnDialogComponent;
  let fixture: ComponentFixture<AddAudioHymnDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AddAudioHymnDialogComponent,
        DialogModule,
        NgMaterialButtonModule,
        HttpClientTestingModule,
        TranslocoTestingModule
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddAudioHymnDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
