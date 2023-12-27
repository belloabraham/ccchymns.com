import { LanguageResourceKey } from './language-resource-key';

describe('LanguageResourceKey', () => {
    it('should have a static property ADD_A_HYMN with the correct value', () => {
      expect(LanguageResourceKey.ADD_A_HYMN).toBe('add_a_hymn');
    });

    it('should have a static property FILTER_HYMN_MSG with the correct value', () => {
      expect(LanguageResourceKey.FILTER_HYMN_MSG).toBe('hymn_search_msg');
    });

    it('should have a static property EMPTY_STATE_DESCRIPTION with the correct value', () => {
      expect(LanguageResourceKey.EMPTY_STATE_DESCRIPTION).toBe(
        'lyrics_empty_state_description'
      );
    });

    it('should have a static property ENGLISH_LYRICS with the correct value', () => {
      expect(LanguageResourceKey.ENGLISH_LYRICS).toBe('english_lyrics');
    });

    it('should have a static property YORUBA_LYRICS with the correct value', () => {
      expect(LanguageResourceKey.YORUBA_LYRICS).toBe('yoruba_lyrics');
    });

    it('should have a static property FRENCH_LYRICS with the correct value', () => {
      expect(LanguageResourceKey.FRENCH_LYRICS).toBe('french_lyrics');
    });

    it('should have a static property REQUIRED_LYRICS_MSG with the correct value', () => {
      expect(LanguageResourceKey.REQUIRED_LYRICS_MSG).toBe(
        'required_lyrics_msg'
      );
    });
});
