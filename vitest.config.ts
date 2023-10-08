import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    setupFiles: ['./src/test-setup.ts'],
    environment: 'happy-dom',
    coverage: {
      provider: 'istanbul',
    },
  },
});