import { Inject, Injectable } from '@angular/core';
import {
  Collection,
  DATABASE_IJTOKEN,
  IDatabase,
  genericRetryStrategy,
} from '../../../core';
import { IAudioHymn, IAudioHymnsUIState } from '@ccchymns.com/common';
import { catchError, from, of, retryWhen } from 'rxjs';
@Injectable()
export class AudioHymnsDataService {
  audioHymns: IAudioHymn[] | null = null;

  constructor(@Inject(DATABASE_IJTOKEN) private remoteData: IDatabase) {}

  public getAudioHymns(): IAudioHymn[] | null {
    return this.audioHymns;
  }
  public setAudioHymns(audioHymns: IAudioHymn[] | null) {
    this.audioHymns = audioHymns;
  }

  getLiveListOfAudioHymns(
    retryTimeout: number,
    onNext: (value: IAudioHymn[]) => void,
    onError: (errorCode: string) => void
  ) {
    return this.remoteData.getLiveListOfDocumentData<IAudioHymn>(
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

  getAllAudioHymns$() {
    return from(
      this.remoteData.getAListOfDocData<IAudioHymn>(
        Collection.EDITORS_HYMNS,
        []
      )
    ).pipe(
      retryWhen(genericRetryStrategy()),
      catchError((error) => of(null))
    );
  }

  getYorubaAudioHymnsUIStates(audioHymns: IAudioHymn[] | null | undefined) {
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

  getEnglishAudioHymnsUIStates(audioHymns: IAudioHymn[] | null | undefined) {
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

  getFrenchAudioHymnsUIStates(audioHymns: IAudioHymn[] | null | undefined) {
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

  getEgunAudioHymnsUIStates(audioHymns: IAudioHymn[] | null | undefined) {
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

  updateYorubaAudioHymn(value: IAudioHymn) {
    if (!value.yoruba) {
      throw new Error('Yoruba url can not be undefined or null');
    }
    return this.remoteData.addADocumentDataTo(
      Collection.EDITORS_AUDIO_HYMNS,
      [`${value.no}`],
      value
    );
  }

  updateEnglishAudioHymn(value: IAudioHymn) {
    if (!value.english) {
      throw new Error('English url can not be undefined or null');
    }
    return this.remoteData.addADocumentDataTo(
      Collection.EDITORS_AUDIO_HYMNS,
      [`${value.no}`],
      value
    );
  }

  updateFrenchAudioHymn(value: IAudioHymn) {
    if (!value.french) {
      throw new Error('French url can not be undefined or null');
    }
    return this.remoteData.addADocumentDataTo(
      Collection.EDITORS_AUDIO_HYMNS,
      [`${value.no}`],
      value
    );
  }

  updateEgunAudioHymn(value: IAudioHymn) {
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
