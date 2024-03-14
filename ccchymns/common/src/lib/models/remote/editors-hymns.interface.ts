import { IHymnNo } from '../hymn-number.interface';
export interface IEditorsHymn extends IEditorsHymnUpdate {
  paid: boolean;
}

export interface IEditorsHymnUpdate
  extends Record<string, string | number | boolean | undefined | null>,
    IHymnNo {
  no: number;
  published: boolean;
  yoruba?: string | null;
  english?: string | null;
  french?: string | null;
  egun?: string | null;
}
