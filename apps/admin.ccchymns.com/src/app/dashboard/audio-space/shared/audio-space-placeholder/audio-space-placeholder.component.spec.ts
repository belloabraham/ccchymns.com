import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioSpacePlaceholderComponent } from './audio-space-placeholder.component';
import { NgFor } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslocoRootModule } from '@ccchymns.com/angular';

describe('AudioSpacePlaceholderComponent', () => {
  let component: AudioSpacePlaceholderComponent;
  let fixture: ComponentFixture<AudioSpacePlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AudioSpacePlaceholderComponent,
        TranslocoModule,
        NgFor,
        HttpClientTestingModule,
        TranslocoRootModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AudioSpacePlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
