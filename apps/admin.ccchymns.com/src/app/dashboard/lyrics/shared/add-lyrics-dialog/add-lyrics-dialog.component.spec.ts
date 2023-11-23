import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLyricsDialogComponent } from './add-lyrics-dialog.component';

describe('AddLyricsDialogComponent', () => {
  let component: AddLyricsDialogComponent;
  let fixture: ComponentFixture<AddLyricsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddLyricsDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddLyricsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
