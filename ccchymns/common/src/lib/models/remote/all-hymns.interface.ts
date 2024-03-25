import { IEditorsAudioHymn } from './editors-audio-hymns.interface';
import { IEditorsAudioSpace } from './editors-audio-space.interface';
import { IEditorsHymn } from './editors-hymns.interface';
import { IEditorsTonicSolfa } from './editors-tonic-solfa.interface';

export interface IAllHymns extends Record<string, any> {
  lyric?: IEditorsHymn;
  audioHymn?: IEditorsAudioHymn;
  audioSpace?: IEditorsAudioSpace;
  tonicSolfa?: IEditorsTonicSolfa;
  no?: number;
}

const allHymns: IAllHymns = {
  lyric: {
    paid: true,
    no: 1,
    published: true,
  },
  audioHymn: {
    no: 1,
  },
  audioSpace: {
    no: 1,
    english: '',
  },
  tonicSolfa: {
    no: 1,
    url: '',
  },
};

const ALL_HYMNS_TYPE = Object.keys(allHymns);

export class ALLHymnsType {
  static readonly LYRIC = ALL_HYMNS_TYPE[0];
  static readonly AUDIO_HYMN = ALL_HYMNS_TYPE[1];
  static readonly AUDIO_SPACE = ALL_HYMNS_TYPE[2];
  static readonly TONIC_SOLFA = ALL_HYMNS_TYPE[3];
}
