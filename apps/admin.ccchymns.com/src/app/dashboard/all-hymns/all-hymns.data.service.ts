import { Inject, Injectable } from '@angular/core';
import {
  IAllHymns,
  IAllHymnsUIState,
  IEditorsHymn,
  IHymnNo,
} from '@ccchymns.com/common';
import { ReplaySubject } from 'rxjs';
import {
  Collection,
  DATABASE_IJTOKEN,
  Fields,
  IDatabase,
} from '../../../core';
import { Firestore, doc, runTransaction } from '@angular/fire/firestore';

@Injectable()
export class AllHymnsDataService {
  allHymns = new Map<number, IAllHymns>();
  private allHymnsUIState$ = new ReplaySubject<IAllHymnsUIState[]>(1);

  constructor(
    @Inject(DATABASE_IJTOKEN) private remoteData: IDatabase,
    private firestore: Firestore
  ) {}

  addDataToAllHymns(allHymns: IHymnNo[], type: string) {
    allHymns.forEach((hymn) => this.addToAllHymns(hymn, type));
    this.updateAllHymnsUIState();
  }

  updateHymnLyricsPaidStatus(value: IEditorsHymn) {
    return this.remoteData.addADocumentDataTo(
      Collection.EDITORS_HYMNS,
      [`${value.no}`],
      value
    );
  }

  async publishHymnLyrics() {
    const allUnpublishedLyrics = this.getAllUnpublishedLyrics();
    return runTransaction(this.firestore, async (transaction) => {
      for (let index = 0; index < allUnpublishedLyrics.length; index++) {
        const lyric = allUnpublishedLyrics[index];
        const editorsHymnDocRef = doc(
          this.firestore,
          Collection.EDITORS_HYMNS,
          `${lyric.no}`
        );
        transaction.update(editorsHymnDocRef, Fields.PUBLISHED, true);

        const paidHymnDocRef = doc(
          this.firestore,
          Collection.ALL_HYMNS_PAID,
          `${lyric.no}`
        );
        transaction.set(paidHymnDocRef, lyric, { merge: true });

        const freeHymnsdDocRef = doc(
          this.firestore,
          Collection.ALL_HYMNS_FREE,
          `${lyric.no}`
        );
        const freeHymn: IEditorsHymn =
          lyric.paid === true
            ? {
                ...lyric,
                yoruba: null,
                english: null,
                french: null,
                egun: null,
              }
            : lyric;
        transaction.set(freeHymnsdDocRef, freeHymn, { merge: true });
      }
    });
  }

  getAllUnpublishedLyrics(): IEditorsHymn[] {
    const allHymns = Array.from(this.allHymns.values());
    const allLyrics: IEditorsHymn[] = [];
    for (let index = 0; index < allHymns.length; index++) {
      const element = allHymns[index];
      if (element.lyric && !element.lyric.published) {
        allLyrics.push(element.lyric);
      }
    }
    return allLyrics;
  }

  setAllHymns(allHymns: Map<number, IAllHymns>) {
    this.allHymns = allHymns;
    this.updateAllHymnsUIState();
  }

  private updateAllHymnsUIState() {
    const allHymnsUIState = Array.from(this.allHymns.values()).filter(
      (value) => value.lyric !== undefined
    );
    allHymnsUIState.sort((first, next) => first.lyric!.no - next.lyric!.no);
    this.allHymnsUIState$.next(allHymnsUIState);
  }

  getAllHymnsUIState$() {
    return this.allHymnsUIState$;
  }

  private addToAllHymns(data: IHymnNo, type: string) {
    const hymnNo = data.no;
    if (!this.allHymns.get(hymnNo)) {
      this.allHymns.set(hymnNo, {});
    }
    this.allHymns.get(hymnNo)![type] = data;
  }
}
