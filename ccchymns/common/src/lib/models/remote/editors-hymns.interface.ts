export interface IEditorsHymn {
  no: number;
  paid: boolean;
  published: boolean;
  yoruba: {
    lyrics: string;
    audio: string;
    tonic: string;
  };
  english: {
    lyrics: string;
    audio: string;
    tonic: string;
  };
  french: {
    lyrics: string;
    audio: string;
    tonic: string;
  };
}
