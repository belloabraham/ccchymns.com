export interface IEditorsHymn{
  no: number;
  paid: boolean;
  published: boolean;
  yoruba?: Hymn | undefined;
  english?: Hymn | undefined;
  french?: Hymn | undefined;
  [key: string]: string | number | boolean | undefined | Hymn;
}

interface Hymn {
  lyrics?: string;
  audio?: string;
  tonic?: string;
  audioSpace?: string;
}
