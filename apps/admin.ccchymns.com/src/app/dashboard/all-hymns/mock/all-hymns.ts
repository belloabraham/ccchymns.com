import { IEditorsHymn } from '@ccchymns.com/common';
export const ALL_HYMNS_MOCK_DATA: IEditorsHymn[] = []
/*
export const ALL_HYMNS_MOCK_DATA: IEditorsHymn[] = [
  {
    no: 1,
    paid: true,
    published: false,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 2,
    paid: true,
    published: false,
    yoruba: {
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 3,
    paid: true,
    published: false,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 4,
    paid: true,
    published: false,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 5,
    paid: false,
    published: true,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',

      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 6,
    paid: true,
    published: false,
    yoruba: {
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      audioSpace:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audioSpace:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 7,
    paid: false,
    published: true,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 8,
    paid: true,
    published: false,
    yoruba: {
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 9,
    paid: false,
    published: true,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 10,
    paid: false,
    published: true,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 11,
    paid: true,
    published: false,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 12,
    paid: true,
    published: false,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 13,
    paid: true,
    published: false,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 14,
    paid: true,
    published: false,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 15,
    paid: true,
    published: false,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 16,
    paid: true,
    published: false,
    yoruba: {
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 17,
    paid: true,
    published: false,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 18,
    paid: true,
    published: false,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 19,
    paid: true,
    published: false,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',

      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',

      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },

  {
    no: 20,
    paid: true,
    published: false,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 21,
    paid: true,
    published: false,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 22,
    paid: true,
    published: false,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',

      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 23,
    paid: true,
    published: false,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 24,
    paid: true,
    published: true,
    yoruba: {
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 25,
    paid: false,
    published: false,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 26,
    paid: true,
    published: false,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 27,
    paid: false,
    published: false,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 28,
    paid: true,
    published: true,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 29,
    paid: true,
    published: false,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 30,
    paid: false,
    published: false,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 31,
    paid: true,
    published: true,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 32,
    paid: true,
    published: true,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 33,
    paid: false,
    published: false,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 34,
    paid: true,
    published: true,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 35,
    paid: true,
    published: true,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 36,
    paid: false,
    published: false,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 37,
    paid: true,
    published: false,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 38,
    paid: true,
    published: false,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 39,
    paid: false,
    published: true,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 40,
    paid: false,
    published: false,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 41,
    paid: true,
    published: false,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 42,
    paid: true,
    published: false,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 43,
    paid: false,
    published: false,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 44,
    paid: false,
    published: true,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 45,
    paid: false,
    published: true,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 46,
    paid: true,
    published: true,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 47,
    paid: true,
    published: false,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 48,
    paid: false,
    published: true,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',

      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 49,
    paid: false,
    published: true,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 50,
    paid: true,
    published: true,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 51,
    paid: true,
    published: true,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 52,
    paid: false,
    published: false,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 53,
    paid: false,
    published: false,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 54,
    paid: true,
    published: false,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 55,
    paid: true,
    published: false,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 56,
    paid: false,
    published: false,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 57,
    paid: true,
    published: true,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 58,
    paid: false,
    published: true,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 58,
    paid: false,
    published: false,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 59,
    paid: true,
    published: false,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 60,
    paid: true,
    published: true,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 61,
    paid: false,
    published: false,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 62,
    paid: true,
    published: false,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 63,
    paid: false,
    published: true,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 64,
    paid: false,
    published: false,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 65,
    paid: true,
    published: true,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 66,
    paid: false,
    published: true,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
  {
    no: 67,
    paid: true,
    published: false,
    yoruba: {
      lyrics:
        'Jerih mo yah mah, Jerih mo yah mah; Awon Angeli kun f’ayo lorun, Awon Angeli, Awon Angeli, Won nf’orin ayo yin Baba lorun.',
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    english: {
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
    french: {
      audio:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
      tonic:
        'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
    },
  },
];
 */
