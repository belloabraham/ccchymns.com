import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyricsTableComponent } from './lyrics-table.component';
import {
  NgMatTooltipModule,
  NgMaterialButtonModule,
  TranslocoRootModule,
} from '@ccchymns.com/angular';
import { CCCIconDirective } from '@ccchymns.com/ui';
import { TranslocoModule } from '@ngneat/transloco';
import { CdkTableModule } from '@angular/cdk/table';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DisplayService } from '@ccchymns.com/common';

describe('LyricsTableComponent', () => {
  let component: LyricsTableComponent;
  let fixture: ComponentFixture<LyricsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LyricsTableComponent,
        CdkTableModule,
        TranslocoModule,
        NgMaterialButtonModule,
        CCCIconDirective,
        NgMatTooltipModule,
        TranslocoRootModule,
        HttpClientTestingModule,
      ],
      providers:[DisplayService]
    }).compileComponents();

    fixture = TestBed.createComponent(LyricsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
