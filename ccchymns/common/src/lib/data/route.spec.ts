import { Route } from "./route";

describe('Route', () => {
  it('should have a static property ROOT with the correct value', () => {
    expect(Route.ROOT).toBe('');
  });

  it('should have a static property DASHBOARD with the correct value', () => {
    expect(Route.DASHBOARD).toBe('dashboard');
  });

  it('should have a static property VERIFY_EMAIL with the correct value', () => {
    expect(Route.VERIFY_EMAIL).toBe('verify-email');
  });

  it('should have a static property ALL_HYMNS with the correct value', () => {
    expect(Route.ALL_HYMNS).toBe('all-hymns');
  });

  it('should have a static property TONIC_SOLFA with the correct value', () => {
    expect(Route.TONIC_SOLFA).toBe('tonic-solfa');
  });

  it('should have a static property BIBLE_REFERENCES with the correct value', () => {
    expect(Route.BIBLE_REFERENCES).toBe('bible-references');
  });

  it('should have a static property AUDIO_HYMNS with the correct value', () => {
    expect(Route.AUDIO_HYMNS).toBe('audio-hymns');
  });

  it('should have a static property AUDIO_SPACE with the correct value', () => {
    expect(Route.AUDIO_SPACE).toBe('audio-space');
  });

  it('should have a static property LYRICS with the correct value', () => {
    expect(Route.LYRICS).toBe('lyrics');
  });

  it('should have a static property YORUBA with the correct value', () => {
    expect(Route.YORUBA).toBe('yoruba');
  });

  it('should have a static property ENGLISH with the correct value', () => {
    expect(Route.ENGLISH).toBe('english');
  });

  it('should have a static property FRENCH with the correct value', () => {
    expect(Route.FRENCH).toBe('french');
  });

});
