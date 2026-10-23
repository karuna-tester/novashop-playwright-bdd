const { expect } = require('@playwright/test');
const { createBdd } = require('playwright-bdd');
const { test } = require('./fixtures');

const { Then } = createBdd(test);

Then('the page shows the text {string}', async ({ page }, text) => {
  await expect(page.getByText(text).first()).toBeVisible();
});
