import { ConnectionState } from './connection-state'; 

describe('ConnectionState', () => {
  it('should have the correct value for OFFLINE', () => {
    expect(ConnectionState.OFFLINE).toEqual('offline');
  });

  it('should have the correct value for ONLINE', () => {
    expect(ConnectionState.ONLINE).toEqual('online');
  });
});
