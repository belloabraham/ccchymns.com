export interface IBibleReference extends Record<string, string | undefined> {
  reference: string;
  yoruba?: string;
  english?: string;
  french?: string;
  egun?: string;
}
