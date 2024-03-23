import { Inject, Injectable } from '@angular/core';
import { IAudioSpaceUIState, IEditorsAudioSpace } from '@ccchymns.com/common';
import {
  Collection,
  DATABASE_IJTOKEN,
  IDatabase,
  genericRetryStrategy,
} from '../../../core';
import { catchError, from, of, retryWhen } from 'rxjs';

@Injectable()
export class AudioSpaceDataService {
  audioSpaces: IEditorsAudioSpace[] | null = null;

  constructor(@Inject(DATABASE_IJTOKEN) private remoteData: IDatabase) {}

  public getEditorsAudioSpaces(): IEditorsAudioSpace[] | null {
    return this.audioSpaces;
  }
  public setEditorsAudioSpaces(audioSpaces: IEditorsAudioSpace[] | null) {
    this.audioSpaces = audioSpaces;
  }

  getLiveListOfAudioSpaces(
    retryTimeout: number,
    onNext: (value: IEditorsAudioSpace[]) => void,
    onError: (errorCode: string) => void
  ) {
    return this.remoteData.getLiveListOfDocumentData<IEditorsAudioSpace>(
      Collection.EDITORS_AUDIO_SPACES,
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

  getAllEditorsAudioSpaces$() {
    return from(
      this.remoteData.getAListOfDocData<IEditorsAudioSpace>(
        Collection.EDITORS_AUDIO_SPACES,
        []
      )
    ).pipe(
      retryWhen(genericRetryStrategy()),
      catchError((error) => of(null))
    );
  }

  getEnglishAudioSpaceUIStates(
    audioSpaces: IEditorsAudioSpace[] | null | undefined
  ) {
    if (audioSpaces) {
      const englishAudioSpace: IAudioSpaceUIState[] = [];
      for (let index = 0; index < audioSpaces.length; index++) {
        const element = audioSpaces[index];
        if (element.english) {
          englishAudioSpace.push({
            no: element.no,
            url: element.english,
          });
        }
      }
      return englishAudioSpace;
    }
    return audioSpaces;
  }

  deleteAudioSpace(no: number) {
    return this.remoteData.deleteADocumentFrom(Collection.EDITORS_AUDIO_SPACES, [
      `${no}`,
    ]);
  }

  updateEnglishAudioSpaces(value: IEditorsAudioSpace) {
    if (!value.english) {
      throw new Error('English url can not be undefined or null');
    }
    return this.remoteData.addADocumentDataTo(
      Collection.EDITORS_AUDIO_SPACES,
      [`${value.no}`],
      value
    );
  }
}
