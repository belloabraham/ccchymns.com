import { LanguageResourceKey } from './language-resource-key';

describe('LanguageResourceKey', () => {
  it('should have the correct value for EDIT', () => {
    expect(LanguageResourceKey.ADD_A_BIBLE_REFERENCE).toEqual('edit');
  });
});