export const majorKeys: string[] = [
  'A', 'Bb', 'B', 'C', 'C#', 'Db', 'D', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab',
];

export const minorKeys: string[] = [
  'F#m', 'Gm', 'G#m', 'Am', 'Bbm', 'Bm', 'Cm', 'C#m', 'Dm', 'D#m', 'Ebm', 'Em', 'Fm',
];

export const capos: Record<string, Record<string, string>> = {
  Bb: {
    1: 'A', 3: 'G', 6: 'E', 8: 'D', 10: 'C',
  },
  D: {
    2: 'C', 5: 'A', 7: 'G', 10: 'E',
  },
  Eb: {
    1: 'D', 3: 'C', 6: 'A', 8: 'G',
  },
  Db: {
    1: 'C', 4: 'A', 6: 'G', 9: 'E',
  },
  'C#': {
    1: 'C', 4: 'A', 6: 'G', 9: 'E',
  },
  E: {
    2: 'D', 4: 'C', 7: 'A', 9: 'G',
  },
  F: {
    1: 'E', 3: 'D', 5: 'C', 6: 'B', 8: 'A', 10: 'G',
  },
  'F#': {
    2: 'E', 4: 'D', 6: 'C', 7: 'B', 9: 'A',
  },
  Gb: {
    2: 'E', 4: 'D', 6: 'C', 7: 'B', 9: 'A',
  },
  G: {
    3: 'E', 5: 'D', 7: 'C', 8: 'B', 10: 'A',
  },
  'G#': {
    1: 'G', 4: 'E', 6: 'D', 8: 'C',
  },
  Ab: {
    1: 'G', 4: 'E', 6: 'D', 8: 'C',
  },
  A: {
    2: 'G', 5: 'E', 7: 'D', 9: 'C',
  },
  B: {
    2: 'A', 4: 'G', 7: 'E', 9: 'D',
  },
  C: {
    3: 'A', 5: 'G', 8: 'E', 10: 'D',
  },
  Am: { 3: 'F#m', 5: 'Em', 7: 'Dm' },
  Bbm: {
    1: 'Am', 4: 'F#m', 6: 'Em', 8: 'Dm',
  },
  Bm: { 2: 'Am', 5: 'F#m', 7: 'Em' },
  Cm: {
    1: 'Bm', 3: 'Am', 6: 'F#m', 8: 'Em',
  },
  'C#m': {
    2: 'Bm', 4: 'Am', 7: 'F#m', 9: 'Em',
  },
  Dm: { 3: 'Bm', 5: 'Am', 8: 'F#m' },
  Ebm: { 1: 'Dm', 4: 'Bm', 6: 'Am' },
  'D#m': { 1: 'Dm', 4: 'Bm', 6: 'Am' },
};
