import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

const nxConfig = nxE2EPreset(__dirname);
export default defineConfig({
  e2e: {
    ...nxConfig,
    baseUrl: 'http://localhost:4800',
  },
});
