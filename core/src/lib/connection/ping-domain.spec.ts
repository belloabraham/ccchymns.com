import { PingDomain } from './ping-domain';

describe('PingDomain', () => {
  it('should have the correct value for ROOT', () => {
    expect(PingDomain.ROOT).toEqual('/');
  });
});
