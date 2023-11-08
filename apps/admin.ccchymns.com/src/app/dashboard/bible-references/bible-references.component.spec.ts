import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BibleReferencesComponent } from './bible-references.component';

describe('BibleReferencesComponent', () => {
  let component: BibleReferencesComponent;
  let fixture: ComponentFixture<BibleReferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BibleReferencesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BibleReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
