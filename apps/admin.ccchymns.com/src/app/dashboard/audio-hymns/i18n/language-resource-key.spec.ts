import { LanguageResourceKey } from './language-resource-key';

describe('LanguageResourceKey', () => {

  it('should have a static property ADD_AUDIO_HYMNS with the correct value', () => {
    expect(LanguageResourceKey.ADD_AUDIO_HYMNS).toBe('add_audio_hymn');
  });

  it('should have a static property EMPTY_STATE_DESCRIPTION with the correct value', () => {
    expect(LanguageResourceKey.EMPTY_STATE_DESCRIPTION).toBe(
      'audio_hymns_empty_state_description'
    );
  });

  it('should have a static property FILTER_AUDIO_MSG with the correct value', () => {
    expect(LanguageResourceKey.FILTER_AUDIO_MSG).toBe('filter_audio_msg');
  });

  it('should have a static property ENGLISH_AUDIO_HYMNS with the correct value', () => {
    expect(LanguageResourceKey.ENGLISH_AUDIO_HYMNS).toBe('english_audio_hymns');
  });

  it('should have a static property FRENCH_AUDIO_HYMNS with the correct value', () => {
    expect(LanguageResourceKey.FRENCH_AUDIO_HYMNS).toBe('french_audio_hymns');
  });

  it('should have a static property YORUBA_AUDIO_HYMNS with the correct value', () => {
    expect(LanguageResourceKey.YORUBA_AUDIO_HYMNS).toBe('yoruba_audio_hymns');
  });

  it('should have a static property UPLOAD_AUDIO_HYMN with the correct value', () => {
    expect(LanguageResourceKey.UPLOAD_AUDIO_HYMN).toBe('upload_audio_hymn');
  });

  it('should have a static property AUDIO_HYMN_REQUIRED_MSG with the correct value', () => {
    expect(LanguageResourceKey.AUDIO_HYMN_REQUIRED_MSG).toBe(
      'audio_hymn_required_msg'
    );
  });
});
