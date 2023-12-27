import { Config } from './config';

describe('Config', () => { it('should have a static property APP_NAME with the correct value', () => {
  expect(Config.APP_NAME).toBe('CCC Hymns');
});

it('should have a static property DOMAIN with the correct value', () => {
  expect(Config.DOMAIN).toBe('ccchymns.com');
});
});
