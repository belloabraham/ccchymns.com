import { LanguageResourceKey } from './language-resource-key';

describe('LanguageResourceKey', () => {
  it('should have the correct value for LOGOUT', () => {
    expect(LanguageResourceKey.LOGOUT).toEqual('logout');
  });
});
