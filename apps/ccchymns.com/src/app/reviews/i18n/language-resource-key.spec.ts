import { LanguageResourceKey } from './language-resource-key';

describe('LanguageResourceKey', () => {
  it('should have a static property USER_REVIEW with the correct value', () => {
    expect(LanguageResourceKey.USER_REVIEW).toBe('users_review');
  });
});
