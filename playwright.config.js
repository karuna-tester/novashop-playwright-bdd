require('dotenv').config();
const { defineConfig, devices } = require('@playwright/test');
const { defineBddConfig } = require('playwright-bdd');

const onCI = Boolean(process.env.CI);
const baseUrl = process.env.BASE_URL || 'https://www.practiceqaautomation.com/shop';

const testDir = defineBddConfig({
  paths: ['features/**/*.feature'],
  require: ['steps/**/*.js'],
  import: ['steps/**/*.js'],
  outputDir: '.generated-tests',
});

module.exports = defineConfig({
  testDir,
  fullyParallel: true,
  forbidOnly: onCI,
  retries: Number(process.env.PW_RETRIES ?? (onCI ? 2 : 1)),
  workers: Number(process.env.PW_WORKERS ?? (onCI ? 2 : 4)),
  timeout: 45000,
  expect: { timeout: 10000 },
  reporter: [
    ['list'],
    ['html', { open: 'never', outputFolder: 'playwright-report' }],
    ['json', { outputFile: 'test-results/results.json' }],
  ],
  outputDir: 'test-results',
  use: {
    baseURL: `${baseUrl.replace(/\/$/, '')}/`,
    actionTimeout: 15000,
    navigationTimeout: 20000,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'off',
    headless: true,
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
