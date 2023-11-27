export interface IEditorsHymn {
  no: number;
  paid: boolean;
  published: boolean;
  yoruba: Hymn;
  english: Hymn;
  french: Hymn;
  [key: string]: string | number | boolean | Hymn;
}
interface Hymn {
  lyrics?: string;
  audio?: string;
  tonic?: string;
}
