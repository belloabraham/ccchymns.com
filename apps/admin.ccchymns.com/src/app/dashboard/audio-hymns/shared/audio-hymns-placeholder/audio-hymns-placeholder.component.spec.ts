import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioHymnsPlaceholderComponent } from './audio-hymns-placeholder.component';
import { TranslocoModule } from '@ngneat/transloco';
import { NgFor } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslocoRootModule } from '@ccchymns.com/angular';

describe('AudioHymnsPlaceholderComponent', () => {
  let component: AudioHymnsPlaceholderComponent;
  let fixture: ComponentFixture<AudioHymnsPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AudioHymnsPlaceholderComponent,
        NgFor,
        TranslocoModule,
        HttpClientTestingModule,
        TranslocoRootModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AudioHymnsPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
