import { LanguageResourceKey } from './language-resource-key';

describe('LanguageResourceKey', () => {
  it('should have the correct value for NO_INTERNET_CONNECTION_NOTICE', () => {
    expect(LanguageResourceKey.NO_INTERNET_CONNECTION_NOTICE).toEqual(
      'no_internet_connection_notice'
    );
  });
});
