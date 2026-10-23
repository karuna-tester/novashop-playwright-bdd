const { expect } = require('@playwright/test');
const { createBdd } = require('playwright-bdd');
const { test } = require('./fixtures');
const { LoginPage } = require('../pages/LoginPage');

const { Given, When, Then } = createBdd(test);

Given('the customer opens the login page', async ({ loginPage }) => {
  await loginPage.open();
});

Given('the customer is logged in', async ({ loginPage, page }) => {
  await loginPage.open();
  await loginPage.login('standard');
  await expect(page.getByRole('heading', { name: 'Products' })).toBeVisible();
});

// Skips the scenario (instead of failing) when an optional practice account is not configured in .env.
Given('the {string} account is configured', async ({ $test }, role) => {
  $test.skip(!LoginPage.isConfigured(role), `Set the ${role} account variable (see .env.example) to run this scenario.`);
});

When('the customer signs in as the {string} account', async ({ loginPage }, role) => {
  await loginPage.login(role);
});

When('the customer signs in with an unrecognised username and a bad password', async ({ loginPage }) => {
  await loginPage.loginValues(`unknown-${Date.now()}`, 'bad-password');
});

When('the customer signs in with username {string} and password {string}', async ({ loginPage }, username, password) => {
  await loginPage.loginValues(username, password);
});

When('the customer logs out', async ({ header }) => {
  await header.logout();
});

Then('the product catalogue is displayed', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Products' })).toBeVisible({ timeout: 20000 });
});

Then('the login error matches {string}', async ({ loginPage }, pattern) => {
  await expect(loginPage.error).toContainText(new RegExp(pattern, 'i'));
});

Then('the login page is displayed', async ({ loginPage }) => {
  await expect(loginPage.heading).toBeVisible();
});

Then('the login form is displayed', async ({ loginPage }) => {
  await expect(loginPage.username).toBeVisible();
});

Then('the sign in button is displayed', async ({ loginPage }) => {
  await expect(loginPage.submit).toBeVisible();
});
