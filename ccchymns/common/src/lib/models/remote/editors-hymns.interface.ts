export interface IEditorsHymn
  extends Record<string, string | number | boolean | undefined> {
  no: number;
  paid: boolean;
  published: boolean;
  yoruba?: string;
  english?: string;
  french?: string;
  egun?: string;
}
