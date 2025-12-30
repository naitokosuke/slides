import { defineConfig, devices } from '@playwright/test'

/**
 * Playwright configuration for Slidev export
 * This file is used during `slidev build` to configure the Playwright browser
 * that renders slides for PDF/SPA generation.
 */
export default defineConfig({
  // Increase timeout for large presentations (276 slides)
  timeout: 120000, // 2 minutes per test/page

  use: {
    // Navigation timeout for page.goto()
    navigationTimeout: 120000, // 2 minutes

    // Action timeout
    actionTimeout: 30000,
  },

  // Configure browser for export
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
})
