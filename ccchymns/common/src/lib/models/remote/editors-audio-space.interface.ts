import { IHymnNo } from '../hymn-number.interface';

export interface IEditorsAudioSpace
  extends Record<string, string | number>,
    IHymnNo {
  no: number;
  english: string;
}
