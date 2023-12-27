import { RootLanguageResourceKey } from './language-resource-key';

describe('RootLanguageResourceKey', () => {
  it('should have a static property OK with the correct value', () => {
    expect(RootLanguageResourceKey.OK).toBe('ok');
  });

  it('should have a static property EMAIL with the correct value', () => {
    expect(RootLanguageResourceKey.EMAIL).toBe('email');
  });

  it('should have a static property INVALID_EMAIL_MGS with the correct value', () => {
    expect(RootLanguageResourceKey.INVALID_EMAIL_MGS).toBe('invalid_email_msg');
  });

  it('should have a static property LOGIN_ERROR_TITLE with the correct value', () => {
    expect(RootLanguageResourceKey.LOGIN_ERROR_TITLE).toBe('login_error_title');
  });

  it('should have a static property YORUBA with the correct value', () => {
    expect(RootLanguageResourceKey.YORUBA).toBe('yoruba');
  });

  it('should have a static property ENGLISH with the correct value', () => {
    expect(RootLanguageResourceKey.ENGLISH).toBe('english');
  });

  it('should have a static property FRENCH with the correct value', () => {
    expect(RootLanguageResourceKey.FRENCH).toBe('french');
  });

  it('should have a static property AUDIO_HYMNS with the correct value', () => {
    expect(RootLanguageResourceKey.AUDIO_HYMNS).toBe('audio_hymns');
  });

  it('should have a static property BIBLE_REFERENCES with the correct value', () => {
    expect(RootLanguageResourceKey.BIBLE_REFERENCES).toBe('bible_references');
  });

  it('should have a static property AUDIO_SPACE with the correct value', () => {
    expect(RootLanguageResourceKey.AUDIO_SPACE).toBe('audio_space');
  });

  it('should have a static property ALL_HYMNS with the correct value', () => {
    expect(RootLanguageResourceKey.ALL_HYMNS).toBe('all_hymns');
  });

  it('should have a static property TONIC_SOLFA with the correct value', () => {
    expect(RootLanguageResourceKey.TONIC_SOLFA).toBe('tonic_solfa');
  });

  it('should have a static property LYRICS with the correct value', () => {
    expect(RootLanguageResourceKey.LYRICS).toBe('lyrics');
  });

  it('should have a static property SAVE with the correct value', () => {
    expect(RootLanguageResourceKey.SAVE).toBe('save');
  });

  it('should have a static property UPDATE with the correct value', () => {
    expect(RootLanguageResourceKey.UPDATE).toBe('update');
  });
});
