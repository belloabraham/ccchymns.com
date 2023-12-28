import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAudioHymnDialogComponent } from './add-audio-hymn-dialog.component';
import { SharedModule } from '../../../shared';
import { NgMaterialButtonModule, TranslocoRootModule } from '@ccchymns.com/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AddAudioHymnDialogComponent', () => {
  let component: AddAudioHymnDialogComponent;
  let fixture: ComponentFixture<AddAudioHymnDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AddAudioHymnDialogComponent,
        SharedModule,
        NgMaterialButtonModule,
        HttpClientTestingModule,
        TranslocoRootModule
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
