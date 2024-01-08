import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLyricsDialogComponent } from './edit-lyrics-dialog.component';
import { getTranslocoTestingModule } from '../../../../mock';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';

describe('EditLyricsDialogComponent', () => {
  let component: EditLyricsDialogComponent;
  let fixture: ComponentFixture<EditLyricsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditLyricsDialogComponent, getTranslocoTestingModule()],
      providers: [
        {
          provide: POLYMORPHEUS_CONTEXT,
          useValue: {},
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EditLyricsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
