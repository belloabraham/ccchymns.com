export interface IAudioHymn
  extends Record<string, string | number | undefined> {
  no: number;
  yoruba?: string;
  english?: string;
  french?: string;
  egun?: string;
}
