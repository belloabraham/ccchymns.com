import { LanguageResourceKey } from './language-resource-key';

describe('LanguageResourceKey', () => {
  it('should have a static property EMPTY_STATE_DESCRIPTION with the correct value', () => {
    expect(LanguageResourceKey.EMPTY_STATE_DESCRIPTION).toBe(
      'all_hymns_empty_state_description'
    );
  });

  it('should have a static property FILTER_ALL_HYMNS_MSG with the correct value', () => {
    expect(LanguageResourceKey.FILTER_ALL_HYMNS_MSG).toBe(
      'filter_all_hymns_desc'
    );
  });

  it('should have a static property PUBLISH_HYMN with the correct value', () => {
    expect(LanguageResourceKey.PUBLISH_HYMN).toBe('publish_hymn');
  });

  it('should have a static property PAID with the correct value', () => {
    expect(LanguageResourceKey.PAID).toBe('paid');
  });
});
