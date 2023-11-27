export interface Hymn {
  no: number;
  paid: boolean;
  yoruba: {
    lyrics: string;
  };
  english: {
    lyrics: string;
  };
  french: {
    lyrics: string;
  };
}

export interface EditorsHymn {
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
