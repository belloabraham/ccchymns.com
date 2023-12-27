import { LanguageResourceKey } from './language-resource-key';

describe('LanguageResourceKey', () => {
  it('should have a static property PAGE_TITLE with the correct value', () => {
    expect(LanguageResourceKey.PAGE_TITLE).toBe('terms_title');
  });
});
