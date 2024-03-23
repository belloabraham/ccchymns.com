import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../shared';
// import { BIBLE_REFERENCE_MOCK_DATA } from '../shared/mock/bible-references';
import { CommonComponent } from '../shared/common/common.component';
import { LanguageResourceKey } from '../i18n/language-resource-key';
import { SubSink } from 'subsink';
import { IBibleReferenceUIState } from '@ccchymns.com/common';
import { Store } from '@ngrx/store';
import { BibleReferencesDataService } from '../bible-references.data.service';
import { getFrenchBibleReferencesSelector } from '../../../../store';

@Component({
  selector: 'app-bible-references-french',
  standalone: true,
  imports: [SharedModule, CommonComponent],
  templateUrl: './french.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrenchComponent implements OnInit, OnDestroy {
  titleKey = LanguageResourceKey.FRENCH_BIBLE_REFERENCES;
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
      .select(getFrenchBibleReferencesSelector())
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
        const frenchBibleReferencesUIState =
          this.bibleReferencesDataService.getFrenchBibleReferenceUIStates(
            bibleReferences
          );
        this.data = frenchBibleReferencesUIState;
        this.cdRef.detectChanges();
      });
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
