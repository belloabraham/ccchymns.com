import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyricsPlaceholderComponent } from './lyrics-placeholder.component';
import { TranslocoModule } from '@ngneat/transloco';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgFor } from '@angular/common';
import { TranslocoRootModule } from '@ccchymns.com/angular';

describe('LyricsPlaceholderComponent', () => {
  let component: LyricsPlaceholderComponent;
  let fixture: ComponentFixture<LyricsPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LyricsPlaceholderComponent,
        NgFor,
        TranslocoModule,
        HttpClientTestingModule,
        TranslocoRootModule
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LyricsPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
