import { RootLanguageResourceKey } from './language-resource-key';

describe('RootLanguageResourceKey', () => {
  test('should have the correct values', () => {
    expect(RootLanguageResourceKey.DOWNLOAD).toEqual('download');
    expect(RootLanguageResourceKey.LOGO).toEqual('logo');
    expect(RootLanguageResourceKey.HOME).toEqual('home');
    expect(RootLanguageResourceKey.ABOUT).toEqual('about');
    expect(RootLanguageResourceKey.PRIVACY).toEqual('privacy');
    expect(RootLanguageResourceKey.APPLE_APP_STORE).toEqual('apple_app_store');
    expect(RootLanguageResourceKey.FULL_APP_NAME).toEqual('full_app_name');
    expect(RootLanguageResourceKey.GOOGLE_PLAY_STORE).toEqual(
      'google_play_store'
    );
    expect(RootLanguageResourceKey.TERMS).toEqual('terms');
    expect(RootLanguageResourceKey.PRIVACY_POLICY).toEqual('privacy_policy');
    expect(RootLanguageResourceKey.LAST_UPDATED).toEqual('last_updated');
    expect(RootLanguageResourceKey.TERMS_OF_USE).toEqual('terms_of_use');
    expect(RootLanguageResourceKey.LEARN_MORE).toEqual('learn_more');
  });
});
