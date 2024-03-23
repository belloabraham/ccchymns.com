import { Inject, Injectable } from '@angular/core';
import { IEditorsTonicSolfa, ITonicSolfaUIState } from '@ccchymns.com/common';
import {
  Collection,
  DATABASE_IJTOKEN,
  IDatabase,
  genericRetryStrategy,
} from '../../../core';
import { catchError, from, of, retryWhen } from 'rxjs';
@Injectable()
export class TonicSolfaDataService {
  editorsTonicSolfas: IEditorsTonicSolfa[] | null = null;

  constructor(@Inject(DATABASE_IJTOKEN) private remoteData: IDatabase) {}

  getLiveListOfTonicSolfas(
    retryTimeout: number,
    onNext: (value: IEditorsTonicSolfa[]) => void,
    onError: (errorCode: string) => void
  ) {
    return this.remoteData.getLiveListOfDocumentData<IEditorsTonicSolfa>(
      Collection.EDITORS_TONIC_SOLFAS,
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

  getAllEditorsTonicSolfas$() {
    return from(
      this.remoteData.getAListOfDocData<IEditorsTonicSolfa>(
        Collection.EDITORS_TONIC_SOLFAS,
        []
      )
    ).pipe(
      retryWhen(genericRetryStrategy()),
      catchError((error) => of(null))
    );
  }

  getTonicSolfaUIStates(tonicSolfas: IEditorsTonicSolfa[] | null | undefined) {
    if (tonicSolfas) {
      const tonicSolfaUIStates: ITonicSolfaUIState[] = [];
      for (let index = 0; index < tonicSolfas.length; index++) {
        const element = tonicSolfas[index];
        tonicSolfaUIStates.push({
          no: element.no,
          url: element.url,
        });
      }
      return tonicSolfaUIStates;
    }
    return tonicSolfas;
  }

  deleteTonicSolfa(no: number) {
    return this.remoteData.deleteADocumentFrom(
      Collection.EDITORS_TONIC_SOLFAS,
      [`${no}`]
    );
  }

  updateTonicSolfa(value: IEditorsTonicSolfa) {
    return this.remoteData.addADocumentDataTo(
      Collection.EDITORS_TONIC_SOLFAS,
      [`${value.no}`],
      value
    );
  }
}
