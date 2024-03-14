import { IHymnNo } from '../hymn-number.interface';

export interface IEditorsHymn extends IEditorsHymnUpdate {
  paid: boolean;
}

export interface IEditorsHymnPaidStatus {
  paid: boolean;
  no: number;
}

export interface IEditorsHymnUpdate
  extends Record<string, string | number | boolean | undefined>,
    IHymnNo {
  no: number;
  published: boolean;
  yoruba?: string;
  english?: string;
  french?: string;
  egun?: string;
}
