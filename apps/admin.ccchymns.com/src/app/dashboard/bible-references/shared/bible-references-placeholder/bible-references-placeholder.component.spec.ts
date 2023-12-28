import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibleReferencesPlaceholderComponent } from './bible-references-placeholder.component';
import { TranslocoModule } from '@ngneat/transloco';
import { NgFor } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslocoRootModule } from '@ccchymns.com/angular';


describe('BibleReferencesPlaceholderComponent', () => {
  let component: BibleReferencesPlaceholderComponent;
  let fixture: ComponentFixture<BibleReferencesPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BibleReferencesPlaceholderComponent,
        TranslocoModule,
        NgFor,
        HttpClientTestingModule,
        TranslocoRootModule
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BibleReferencesPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
