import { LanguageResourceKey } from './language-resource-key';

describe('LanguageResourceKey', () => {
  it('should have a static property PAGE_TITLE with the correct value', () => {
    expect(LanguageResourceKey.PAGE_TITLE).toBe('auth_title');
  });

  it('should have a static property LOGIN with the correct value', () => {
    expect(LanguageResourceKey.LOGIN).toBe('login');
  });

  it('should have a static property AUTH_LOGIN_MSG with the correct value', () => {
    expect(LanguageResourceKey.AUTH_LOGIN_MGS).toBe('authorized_login_msg');
  });

  it('should have a static property LOGIN_LINK_SENT_TITLE with the correct value', () => {
    expect(LanguageResourceKey.LOGIN_LINK_SENT_TITLE).toBe(
      'login_link_sent_title'
    );
  });

  it('should have a static property LOGIN_LINK_SENT_MSG with the correct value', () => {
    expect(LanguageResourceKey.LOGIN_LINK_SENT_MSG).toBe('login_link_sent_msg');
  });

  it('should have a static property UNAUTHORIZED_LOGIN_ERROR_MSG with the correct value', () => {
    expect(LanguageResourceKey.UNAUTHORIZED_LOGIN_ERROR_MSG).toBe(
      'unauthorized_login_error_msg'
    );
  });
});
