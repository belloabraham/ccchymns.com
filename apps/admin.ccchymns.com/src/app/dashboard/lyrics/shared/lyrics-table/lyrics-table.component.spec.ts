import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyricsTableComponent } from './lyrics-table.component';

describe('LyricsTableComponent', () => {
  let component: LyricsTableComponent<any>;
  let fixture: ComponentFixture<LyricsTableComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LyricsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LyricsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
