import { LanguageResourceKey } from './language-resource-key';

describe('LanguageResourceKey', () => {

  it('should have a static property PAGE_TITLE with the correct value', () => {
    expect(LanguageResourceKey.PAGE_TITLE).toBe('verify_email_title');
  });

  it('should have a static property VERIFY_EMAIL with the correct value', () => {
    expect(LanguageResourceKey.VERIFY_EMAIL).toBe('verify_email');
  });

  it('should have a static property EMAIL_VERIFICATION_TITLE with the correct value', () => {
    expect(LanguageResourceKey.EMAIL_VERIFICATION_TITLE).toBe(
      'email_verification_title'
    );
  });
});
