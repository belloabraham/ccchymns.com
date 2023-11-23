import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyricsPlaceholderComponent } from './lyrics-placeholder.component';

describe('LyricsPlaceholderComponent', () => {
  let component: LyricsPlaceholderComponent;
  let fixture: ComponentFixture<LyricsPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LyricsPlaceholderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LyricsPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
