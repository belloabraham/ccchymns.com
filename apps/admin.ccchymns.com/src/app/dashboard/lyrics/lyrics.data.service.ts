import { Inject, Injectable } from '@angular/core';
import { IEditorsHymn, IHymnLyricsUIState } from '@ccchymns.com/common';
import {
  Collection,
  DATABASE_IJTOKEN,
  IDatabase,
  genericRetryStrategy,
} from 'apps/admin.ccchymns.com/src/core';
import { catchError, from, of, retryWhen } from 'rxjs';

@Injectable()
export class LyricsDataService {
  constructor(@Inject(DATABASE_IJTOKEN) private remoteData: IDatabase) {}

  getLiveListOfEditorsHymn(
    onNext: (value: IEditorsHymn[]) => void,
    onError: (errorCode: string) => void
  ) {
    return this.remoteData.getLiveListOfDocumentData<IEditorsHymn>(
      Collection.EDITORS_HYMNS,
      [],
      (value) => {
        onNext(value);
      },
      (error) => {
        onError(error);
      },
      1000
    );
  }

  getAllEditorsHymns() {
    return from(
      this.remoteData.getAListOfDocData<IEditorsHymn>(
        Collection.EDITORS_HYMNS,
        []
      )
    ).pipe(
      retryWhen(genericRetryStrategy()),
      catchError((error) => of(null))
    );
  }

  getYorubaLyricsUIStates(editorsHymns: IEditorsHymn[] | null | undefined) {
    if (editorsHymns) {
      const yorubaLyrics: IHymnLyricsUIState[] = [];
      for (let index = 0; index < editorsHymns.length; index++) {
        const element = editorsHymns[index];
        if (element.yoruba) {
          yorubaLyrics.push({
            no: element.no,
            lyrics: element.yoruba,
          });
        }
      }
      return yorubaLyrics;
    }
    return editorsHymns;
  }

  getEnglishLyricsUIStates(editorsHymns: IEditorsHymn[] | null | undefined) {
    if (editorsHymns) {
      const englishLyrics: IHymnLyricsUIState[] = [];
      for (let index = 0; index < editorsHymns.length; index++) {
        const element = editorsHymns[index];
        if (element.english) {
          englishLyrics.push({
            no: element.no,
            lyrics: element.english,
          });
        }
      }
      return englishLyrics;
    }
    return editorsHymns;
  }

  getEgunLyricsUIStates(editorsHymns: IEditorsHymn[] | null | undefined) {
    if (editorsHymns) {
      const egunLyrics: IHymnLyricsUIState[] = [];
      for (let index = 0; index < editorsHymns.length; index++) {
        const element = editorsHymns[index];
        if (element.egun) {
          egunLyrics.push({
            no: element.no,
            lyrics: element.egun,
          });
        }
      }
      return egunLyrics;
    }
    return editorsHymns;
  }

  getFrenchLyricsUIStates(editorsHymns: IEditorsHymn[] | null | undefined) {
    if (editorsHymns) {
      const frenchLyrics: IHymnLyricsUIState[] = [];
      for (let index = 0; index < editorsHymns.length; index++) {
        const element = editorsHymns[index];
        if (element.french) {
          frenchLyrics.push({
            no: element.no,
            lyrics: element.french,
          });
        }
      }
      return frenchLyrics;
    }
    return editorsHymns;
  }

  updateYorubaHymnLyrics(hymnNo: string, value: IEditorsHymn) {
    this.throwErrorForAPublishedLyrics(value.published);
    if (!value.yoruba) {
      throw new Error('Yoruba value can not be undefined or null');
    }
    return this.remoteData.addADocumentDataTo(
      Collection.EDITORS_HYMNS,
      [hymnNo],
      value
    );
  }

  updateEnglishHymnLyrics(hymnNo: string, value: IEditorsHymn) {
    this.throwErrorForAPublishedLyrics(value.published);
    if (!value.english) {
      throw new Error('English value can not be undefined or null');
    }
    return this.remoteData.addADocumentDataTo(
      Collection.EDITORS_HYMNS,
      [hymnNo],
      value
    );
  }

  updateEgunHymnLyrics(hymnNo: string, value: IEditorsHymn) {
    this.throwErrorForAPublishedLyrics(value.published);
    if (!value.egun) {
      throw new Error('Egun value can not be undefined or null');
    }
    return this.remoteData.addADocumentDataTo(
      Collection.EDITORS_HYMNS,
      [hymnNo],
      value
    );
  }

  updateFrenchHymnLyrics(hymnNo: string, value: IEditorsHymn) {
    this.throwErrorForAPublishedLyrics(value.published);
    if (!value.french) {
      throw new Error('French value can not be undefined or null');
    }
    return this.remoteData.addADocumentDataTo(
      Collection.EDITORS_HYMNS,
      [hymnNo],
      value
    );
  }

  //An updated lyrics have to be unpublished
  throwErrorForAPublishedLyrics(published: boolean) {
    if (published !== false) {
      throw new Error('Published value must be false');
    }
  }
}
