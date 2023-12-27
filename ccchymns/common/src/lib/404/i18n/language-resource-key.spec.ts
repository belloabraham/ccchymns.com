import { LanguageResourceKey } from "./language-resource-key";

describe('LanguageResourceKey', () => {
    it('should have a static property PAGE_TITLE with the correct value', () => {
      expect(LanguageResourceKey.PAGE_TITLE).toBe('page_not_found_title');
    });

    it('should have a static property PAGE_NOT_FOUND_MESSAGE with the correct value', () => {
      expect(LanguageResourceKey.PAGE_NOT_FOUND_MESSAGE).toBe(
        'page_not_found_message'
      );
    });

    it('should have a static property GO_HOME with the correct value', () => {
      expect(LanguageResourceKey.GO_HOME).toBe('go_home');
    });

    it('should have a static property LOGO with the correct value', () => {
      expect(LanguageResourceKey.LOGO).toBe('logo');
    });
});
