export interface IEditorsHymn extends IEditorsHymnUpdate {
  paid: boolean;
}

export interface IEditorsHymnUpdate
  extends Record<string, string | number | boolean | undefined> {
  no: number;
  published: boolean;
  yoruba?: string;
  english?: string;
  french?: string;
  egun?: string;
}
