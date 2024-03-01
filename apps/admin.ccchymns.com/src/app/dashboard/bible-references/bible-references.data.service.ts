import { Inject, Injectable } from '@angular/core';
import { IBibleReference, IBibleReferenceUIState } from '@ccchymns.com/common';
import {
  Collection,
  DATABASE_IJTOKEN,
  IDatabase,
  genericRetryStrategy,
} from 'apps/admin.ccchymns.com/src/core';
import { catchError, from, of, retryWhen } from 'rxjs';

@Injectable()
export class BibleReferencesDataService {
  bibleReferences: IBibleReference[] | null = null;

  constructor(@Inject(DATABASE_IJTOKEN) private remoteData: IDatabase) {}

  public getBibleReferences(): IBibleReference[] | null {
    return this.bibleReferences;
  }
  public setBibleReferences(bibleReferences: IBibleReference[] | null) {
    this.bibleReferences = bibleReferences;
  }


  deleteABibleReference(reference:string){
    return this.remoteData.deleteADocumentFrom(Collection.BIBLE_REFERENCES, [reference])
  }

  getLiveListOfBibleReferences(
    retryTimeout: number,
    onNext: (value: IBibleReference[]) => void,
    onError: (errorCode: string) => void
  ) {
    return this.remoteData.getLiveListOfDocumentData<IBibleReference>(
      Collection.BIBLE_REFERENCES,
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

  getAllBibleReferences$() {
    return from(
      this.remoteData.getAListOfDocData<IBibleReference>(
        Collection.BIBLE_REFERENCES,
        []
      )
    ).pipe(
      retryWhen(genericRetryStrategy()),
      catchError((error) => of(null))
    );
  }

  getYorubaBibleReferenceUIStates(
    bibleReferences: IBibleReference[] | null | undefined
  ) {
    if (bibleReferences) {
      const yorubaReference: IBibleReferenceUIState[] = [];
      for (let index = 0; index < bibleReferences.length; index++) {
        const element = bibleReferences[index];
        if (element.yoruba) {
          yorubaReference.push({
            reference: element.reference,
            verses: element.yoruba,
          });
        }
      }
      return yorubaReference;
    }
    return bibleReferences;
  }

  getEnglishBibleReferenceUIStates(
    bibleReferences: IBibleReference[] | null | undefined
  ) {
    if (bibleReferences) {
      const englishReference: IBibleReferenceUIState[] = [];
      for (let index = 0; index < bibleReferences.length; index++) {
        const element = bibleReferences[index];
        if (element.english) {
          englishReference.push({
            reference: element.reference,
            verses: element.english,
          });
        }
      }
      return englishReference;
    }
    return bibleReferences;
  }

  getFrenchBibleReferenceUIStates(
    bibleReferences: IBibleReference[] | null | undefined
  ) {
    if (bibleReferences) {
      const frenchReference: IBibleReferenceUIState[] = [];
      for (let index = 0; index < bibleReferences.length; index++) {
        const element = bibleReferences[index];
        if (element.french) {
          frenchReference.push({
            reference: element.reference,
            verses: element.french,
          });
        }
      }
      return frenchReference;
    }
    return bibleReferences;
  }

  getEgunBibleReferenceUIStates(
    bibleReferences: IBibleReference[] | null | undefined
  ) {
    if (bibleReferences) {
      const egunReference: IBibleReferenceUIState[] = [];
      for (let index = 0; index < bibleReferences.length; index++) {
        const element = bibleReferences[index];
        if (element.egun) {
          egunReference.push({
            reference: element.reference,
            verses: element.egun,
          });
        }
      }
      return egunReference;
    }
    return bibleReferences;
  }

  updateYorubaBibleReference(value: IBibleReference) {
    if (!value.yoruba) {
      throw new Error('Yoruba value can not be undefined or null');
    }
    return this.remoteData.addADocumentDataTo(
      Collection.EDITORS_HYMNS,
      [`${value.reference}`],
      value
    );
  }

  updateEnglishBibleReference(value: IBibleReference) {
    if (!value.english) {
      throw new Error('English value can not be undefined or null');
    }
    return this.remoteData.addADocumentDataTo(
      Collection.EDITORS_HYMNS,
      [`${value.reference}`],
      value
    );
  }

  updateEgunBibleReference(value: IBibleReference) {
    if (!value.egun) {
      throw new Error('Egun value can not be undefined or null');
    }
    return this.remoteData.addADocumentDataTo(
      Collection.EDITORS_HYMNS,
      [`${value.reference}`],
      value
    );
  }

  updateFrenchBibleReference(value: IBibleReference) {
     if (!value.french) {
       throw new Error('French value can not be undefined or null');
     }
    return this.remoteData.addADocumentDataTo(
      Collection.EDITORS_HYMNS,
      [`${value.reference}`],
      value
    );
  }
}
