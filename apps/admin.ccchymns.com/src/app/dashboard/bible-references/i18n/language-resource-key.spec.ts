import { LanguageResourceKey } from './language-resource-key';

describe('LanguageResourceKey', () => {

  it('should have a static property ADD_A_BIBLE_REFERENCE with the correct value', () => {
    expect(LanguageResourceKey.ADD_A_BIBLE_REFERENCE).toBe(
      'add_a_bible_reference'
    );
  });

  it('should have a static property BIBLE_REFERENCE_SEARCH_MSG with the correct value', () => {
    expect(LanguageResourceKey.BIBLE_REFERENCE_SEARCH_MSG).toBe(
      'bible_reference_search_msg'
    );
  });

  it('should have a static property BIBLE_REFERENCE_EMPTY_STATE_DESCRIPTION with the correct value', () => {
    expect(LanguageResourceKey.BIBLE_REFERENCE_EMPTY_STATE_DESCRIPTION).toBe(
      'bible_reference_empty_state_description'
    );
  });

  it('should have a static property VERSES with the correct value', () => {
    expect(LanguageResourceKey.VERSES).toBe('verses');
  });

  it('should have a static property BIBLE_REFERENCE_PLACEHOLDER with the correct value', () => {
    expect(LanguageResourceKey.BIBLE_REFERENCE_PLACEHOLDER).toBe(
      'bible_reference_placeholder'
    );
  });

  it('should have a static property FRENCH_BIBLE_REFERENCES with the correct value', () => {
    expect(LanguageResourceKey.FRENCH_BIBLE_REFERENCES).toBe(
      'french_bible_references'
    );
  });

  it('should have a static property ENGLISH_BIBLE_REFERENCES with the correct value', () => {
    expect(LanguageResourceKey.ENGLISH_BIBLE_REFERENCES).toBe(
      'english_bible_references'
    );
  });

  it('should have a static property YORUBA_BIBLE_REFERENCES with the correct value', () => {
    expect(LanguageResourceKey.YORUBA_BIBLE_REFERENCES).toBe(
      'yoruba_bible_references'
    );
  });

  it('should have a static property REQUIRED_BIBLE_REF_MSG with the correct value', () => {
    expect(LanguageResourceKey.REQUIRED_BIBLE_REF_MSG).toBe(
      'required_bible_ref_msg'
    );
  });

  it('should have a static property REQUIRED_BIBLE_VERSE_MSG with the correct value', () => {
    expect(LanguageResourceKey.REQUIRED_BIBLE_VERSE_MSG).toBe(
      'required_bible_verse_msg'
    );
  });

  it('should have a static property REFERENCE with the correct value', () => {
    expect(LanguageResourceKey.REFERENCE).toBe('reference');
  });
});
