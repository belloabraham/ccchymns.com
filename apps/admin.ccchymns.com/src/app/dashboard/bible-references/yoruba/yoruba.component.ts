import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { SharedModule } from '../../shared';
// import { BIBLE_REFERENCE_MOCK_DATA } from '../shared/mock/bible-references';
import { CommonComponent } from '../shared/common/common.component';
import { LanguageResourceKey } from '../i18n/language-resource-key';
import { SubSink } from 'subsink';
import { IBibleReferenceUIState } from '@ccchymns.com/common';
import { BibleReferencesDataService } from '../bible-references.data.service';
import { Store } from '@ngrx/store';
import { getYorubaBibleReferencesSelector } from 'apps/admin.ccchymns.com/src/store';

@Component({
  selector: 'app-bible-references-yoruba',
  standalone: true,
  imports: [SharedModule, CommonComponent],
  templateUrl: './yoruba.component.html',
  styleUrl: './yoruba.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YorubaComponent implements OnInit, OnDestroy {
  titleKey = LanguageResourceKey.YORUBA_BIBLE_REFERENCES;
  // data = BIBLE_REFERENCE_MOCK_DATA;
  private subscriptions = new SubSink();

  data?: IBibleReferenceUIState[] | null;
  constructor(
    private ngrxStore: Store,
    private bibleReferencesDataService: BibleReferencesDataService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscriptions.sink = this.ngrxStore
      .select(getYorubaBibleReferencesSelector())
      .subscribe((data) => {
        this.data = data;
        this.cdRef.detectChanges();
      });
  }

  retry() {
    this.data = undefined;
    this.subscriptions.sink = this.bibleReferencesDataService
      .getAllBibleReferences$()
      .subscribe((bibleReferences) => {
        this.bibleReferencesDataService.setBibleReferences(bibleReferences);
        const yorubaBibleReferencesUIState =
          this.bibleReferencesDataService.getYorubaBibleReferenceUIStates(
            bibleReferences
          );
        this.data = yorubaBibleReferencesUIState;
        this.cdRef.detectChanges();
      });
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
