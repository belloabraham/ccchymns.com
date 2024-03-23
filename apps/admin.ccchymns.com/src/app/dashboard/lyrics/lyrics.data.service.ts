import { Inject, Injectable } from '@angular/core';
import {
  IEditorsHymn,
  IEditorsHymnUpdate,
  IHymnLyricsUIState,
} from '@ccchymns.com/common';
import {
  Collection,
  DATABASE_IJTOKEN,
  IDatabase,
  genericRetryStrategy,
} from '../../../core';
import { catchError, from, of, retryWhen } from 'rxjs';

@Injectable()
export class LyricsDataService {
  editorsHymns: IEditorsHymn[] | null = null;
  constructor(@Inject(DATABASE_IJTOKEN) private remoteData: IDatabase) {}

  setEditorsHymn(editorsHymns: IEditorsHymn[] | null) {
    this.editorsHymns = editorsHymns;
  }

  getEditorsHymn() {
    return this.editorsHymns;
  }
  getLiveListOfEditorsHymn(
    retryTimeout: number,
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
      retryTimeout
    );
  }

  getAllEditorsHymns$() {
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

  updateYorubaHymnLyrics(value: IEditorsHymnUpdate) {
    this.throwErrorForAPublishedLyrics(value.published);
    if (!value.yoruba) {
      throw new Error('Yoruba value can not be undefined or null');
    }
    return this.remoteData.addADocumentDataTo(
      Collection.EDITORS_HYMNS,
      [`${value.no}`],
      value
    );
  }

  updateEnglishHymnLyrics(value: IEditorsHymnUpdate) {
    this.throwErrorForAPublishedLyrics(value.published);
    if (!value.english) {
      throw new Error('English value can not be undefined or null');
    }
    return this.remoteData.addADocumentDataTo(
      Collection.EDITORS_HYMNS,
      [`${value.no}`],
      value
    );
  }

  updateEgunHymnLyrics(value: IEditorsHymnUpdate) {
    this.throwErrorForAPublishedLyrics(value.published);
    if (!value.egun) {
      throw new Error('Egun value can not be undefined or null');
    }
    return this.remoteData.addADocumentDataTo(
      Collection.EDITORS_HYMNS,
      [`${value.no}`],
      value
    );
  }

  updateFrenchHymnLyrics(value: IEditorsHymnUpdate) {
    this.throwErrorForAPublishedLyrics(value.published);
    if (!value.french) {
      throw new Error('French value can not be undefined or null');
    }
    return this.remoteData.addADocumentDataTo(
      Collection.EDITORS_HYMNS,
      [`${value.no}`],
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
