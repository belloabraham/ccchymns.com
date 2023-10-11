import { Providers } from './providers';

describe('Providers', () => {
  it('should have the correct value for ROOT', () => {
    expect(Providers.ROOT).toEqual('root');
  });

  it('should have the correct value for ANY', () => {
    expect(Providers.ANY).toEqual('any');
  });
});
