export interface IEditorsAudioHymn
  extends Record<string, string | number | undefined | null> {
  no: number;
  yoruba?: string | null;
  english?: string | null;
  french?: string | null;
  egun?: string | null;
}
