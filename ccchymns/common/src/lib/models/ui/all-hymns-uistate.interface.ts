import {
  IEditorsAudioHymn,
  IEditorsAudioSpace,
  IEditorsHymn,
  IEditorsTonicSolfa,
} from '../remote';

export interface IAllHymnsUIState extends Record<string, any> {
  lyric?: IEditorsHymn;
  audioHymn?: IEditorsAudioHymn;
  audioSpace?: IEditorsAudioSpace;
  tonicSolfa?: IEditorsTonicSolfa;
}
