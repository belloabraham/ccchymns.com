import { IHymnNo } from '../hymn-number.interface';

export interface IEditorsAudioHymn
  extends Record<string, string | number | undefined | null>,
    IHymnNo {
  no: number;
  yoruba?: string | null;
  english?: string | null;
  french?: string | null;
  egun?: string | null;
}
