import { ConnectingHeader } from './connection-header';

describe('ConnectingHeader', () => {
  it('should have the correct value for HEAD', () => {
    expect(ConnectingHeader.HEAD).toEqual('HEAD');
  });

  it('should have the correct value for CACHE', () => {
    expect(ConnectingHeader.CACHE).toEqual('no-store');
  });
});
