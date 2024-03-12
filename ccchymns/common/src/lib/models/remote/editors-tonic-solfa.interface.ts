import { IHymnNo } from '../hymn-number.interface';

export interface IEditorsTonicSolfa
  extends Record<string, string | number>,
    IHymnNo {
  no: number;
  url: string;
}
