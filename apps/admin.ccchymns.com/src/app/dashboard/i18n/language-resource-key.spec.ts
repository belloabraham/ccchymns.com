import { DashboardLanguageResourceKey } from './language-resource-key';

describe('LanguageResourceKey', () => {
  it('should have the correct value for LOGOUT', () => {
    expect(DashboardLanguageResourceKey.LOGOUT).toEqual('logout');
  });
});
