import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAudioSpaceDialogComponent } from './add-audio-space-dialog.component';
import { SharedModule } from '../../../shared';
import { NgMaterialButtonModule } from '@ccchymns.com/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AddAudioSpaceDialogComponent', () => {
  let component: AddAudioSpaceDialogComponent;
  let fixture: ComponentFixture<AddAudioSpaceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AddAudioSpaceDialogComponent,
        SharedModule,
        NgMaterialButtonModule, HttpClientTestingModule
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
