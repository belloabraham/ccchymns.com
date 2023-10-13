import { Language } from './language';

describe('Language', () => {
  it('should have the correct value for ENGLISH', () => {
    expect(Language.ENGLISH).toEqual('en');
  });

  it('should have the correct value for ENGLISH', () => {
    expect(Language.FRENCH).toEqual('fr');
  });

  it('should have the correct value for APP_NAME', () => {
    expect(Language.APP_NAME).toEqual('app_name');
  });
});
