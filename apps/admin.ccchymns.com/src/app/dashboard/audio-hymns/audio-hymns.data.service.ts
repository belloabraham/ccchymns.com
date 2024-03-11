import { Inject, Injectable } from '@angular/core';
import {
  Collection,
  DATABASE_IJTOKEN,
  IDatabase,
  genericRetryStrategy,
} from 'apps/admin.ccchymns.com/src/core';
import { IEditorsAudioHymn, IAudioHymnsUIState } from '@ccchymns.com/common';
import { catchError, from, of, retryWhen } from 'rxjs';
@Injectable()
export class AudioHymnsDataService {
  audioHymns: IEditorsAudioHymn[] | null = null;

  constructor(@Inject(DATABASE_IJTOKEN) private remoteData: IDatabase) {}

  public getEditorsAudioHymns(): IEditorsAudioHymn[] | null {
    return this.audioHymns;
  }
  public setEditorsAudioHymns(audioHymns: IEditorsAudioHymn[] | null) {
    this.audioHymns = audioHymns;
  }

  getLiveListOfAudioHymns(
    retryTimeout: number,
    onNext: (value: IEditorsAudioHymn[]) => void,
    onError: (errorCode: string) => void
  ) {
    return this.remoteData.getLiveListOfDocumentData<IEditorsAudioHymn>(
      Collection.EDITORS_AUDIO_HYMNS,
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

  getAllEditorsAudioHymns$() {
    return from(
      this.remoteData.getAListOfDocData<IEditorsAudioHymn>(
        Collection.EDITORS_AUDIO_HYMNS,
        []
      )
    ).pipe(
      retryWhen(genericRetryStrategy()),
      catchError((error) => of(null))
    );
  }

  getYorubaAudioHymnsUIStates(
    audioHymns: IEditorsAudioHymn[] | null | undefined
  ) {
    if (audioHymns) {
      const yorubaAudioHymns: IAudioHymnsUIState[] = [];
      for (let index = 0; index < audioHymns.length; index++) {
        const element = audioHymns[index];
        if (element.yoruba) {
          yorubaAudioHymns.push({
            no: element.no,
            url: element.yoruba,
          });
        }
      }
      return yorubaAudioHymns;
    }
    return audioHymns;
  }

  getEnglishAudioHymnsUIStates(
    audioHymns: IEditorsAudioHymn[] | null | undefined
  ) {
    if (audioHymns) {
      const englishAudioHymns: IAudioHymnsUIState[] = [];
      for (let index = 0; index < audioHymns.length; index++) {
        const element = audioHymns[index];
        if (element.english) {
          englishAudioHymns.push({
            no: element.no,
            url: element.english,
          });
        }
      }
      return englishAudioHymns;
    }
    return audioHymns;
  }

  getFrenchAudioHymnsUIStates(
    audioHymns: IEditorsAudioHymn[] | null | undefined
  ) {
    if (audioHymns) {
      const frenchAudioHymns: IAudioHymnsUIState[] = [];
      for (let index = 0; index < audioHymns.length; index++) {
        const element = audioHymns[index];
        if (element.french) {
          frenchAudioHymns.push({
            no: element.no,
            url: element.french,
          });
        }
      }
      return frenchAudioHymns;
    }
    return audioHymns;
  }

  getEgunAudioHymnsUIStates(
    audioHymns: IEditorsAudioHymn[] | null | undefined
  ) {
    if (audioHymns) {
      const egunAudioHymns: IAudioHymnsUIState[] = [];
      for (let index = 0; index < audioHymns.length; index++) {
        const element = audioHymns[index];
        if (element.egun) {
          egunAudioHymns.push({
            no: element.no,
            url: element.egun,
          });
        }
      }
      return egunAudioHymns;
    }
    return audioHymns;
  }
  updateAudioHymnRecord(value: IEditorsAudioHymn) {
    return this.remoteData.addADocumentDataTo(
      Collection.EDITORS_AUDIO_HYMNS,
      [`${value.no}`],
      value
    );
  }

  updateYorubaAudioHymn(value: IEditorsAudioHymn) {
    if (!value.yoruba) {
      throw new Error('Yoruba url can not be undefined or null');
    }
    return this.remoteData.addADocumentDataTo(
      Collection.EDITORS_AUDIO_HYMNS,
      [`${value.no}`],
      value
    );
  }

  updateEnglishAudioHymn(value: IEditorsAudioHymn) {
    if (!value.english) {
      throw new Error('English url can not be undefined or null');
    }
    return this.remoteData.addADocumentDataTo(
      Collection.EDITORS_AUDIO_HYMNS,
      [`${value.no}`],
      value
    );
  }

  updateFrenchAudioHymn(value: IEditorsAudioHymn) {
    if (!value.french) {
      throw new Error('French url can not be undefined or null');
    }
    return this.remoteData.addADocumentDataTo(
      Collection.EDITORS_AUDIO_HYMNS,
      [`${value.no}`],
      value
    );
  }

  updateEgunAudioHymn(value: IEditorsAudioHymn) {
    if (!value.egun) {
      throw new Error('Egun url can not be undefined or null');
    }
    return this.remoteData.addADocumentDataTo(
      Collection.EDITORS_AUDIO_HYMNS,
      [`${value.no}`],
      value
    );
  }
}
