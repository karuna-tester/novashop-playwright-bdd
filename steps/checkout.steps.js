const { expect } = require('@playwright/test');
const { createBdd } = require('playwright-bdd');
const { test } = require('./fixtures');
const { roundCurrency } = require('../pages/BasePage');
const { validCheckout } = require('./testData');

const { Given, When, Then } = createBdd(test);

Given('the customer opens the checkout page', async ({ checkout }) => {
  await checkout.open();
});

Given('the customer fills in valid checkout details', async ({ checkout }) => {
  await checkout.fillValidDetails(validCheckout);
});

Given('the customer fills in the contact details only', async ({ checkout }) => {
  await checkout.fillContactDetails(validCheckout);
});

Given('the customer accepts the terms', async ({ checkout }) => {
  await checkout.termsCheckbox.check();
});

Given('the customer clears the terms checkbox', async ({ checkout }) => {
  await checkout.termsCheckbox.uncheck();
});

Given('the customer chooses the {string} delivery or payment option', async ({ checkout }, option) => {
  await checkout.choose(new RegExp(option));
});

Given('the customer enters email {string}, phone {string} and ZIP code {string}', async ({ checkout }, email, phone, zip) => {
  await checkout.email.fill(email);
  await checkout.phone.fill(phone);
  await checkout.zip.fill(zip);
});

Given('the customer enters card number {string}', async ({ checkout }, cardNumber) => {
  await checkout.cardNumber.fill(cardNumber);
});

Given('the customer notes the checkout total', async ({ checkout, ctx }) => {
  ctx.checkoutTotal = await checkout.amount('Total');
});

When('the customer places the order', async ({ checkout }) => {
  await checkout.placeOrder();
});

Then('the checkout shows an error summary', async ({ page }) => {
  await expect(page.getByText(/Please fix \d+ errors below/)).toBeVisible();
});

Then('the checkout shows the message {string}', async ({ page }, message) => {
  await expect(page.getByText(message)).toBeVisible();
});

Then('the checkout page is still displayed', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Checkout' })).toBeVisible();
});

Then('the checkout shipping is {int} and the total is subtotal plus shipping plus tax', async ({ checkout }, expectedShipping) => {
  const subtotal = await checkout.amount('Subtotal');
  const tax = await checkout.amount('Tax');
  const shipping = await checkout.amount('Shipping');
  const total = await checkout.amount('Total');
  expect(shipping).toBe(expectedShipping);
  expect(total).toBe(roundCurrency(subtotal + shipping + tax));
});

Then('the order confirmation is displayed', async ({ page, checkout, ctx }) => {
  await expect(page.getByRole('heading', { name: 'Thank you for your order!' })).toBeVisible();
  ctx.orderId = await checkout.confirmedOrderId();
});

Then('no order confirmation is displayed', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Thank you for your order!' })).toHaveCount(0);
});

Then('a declined message is displayed', async ({ page }) => {
  await expect(page.getByText(/declin/i)).toBeVisible();
});

Then('the confirmation shows the noted total', async ({ page, ctx }) => {
  await expect(page.getByText(`$${ctx.checkoutTotal.toFixed(2)}`)).toBeVisible();
});

Then('the confirmation field {string} is {string}', async ({ checkout }, field, value) => {
  expect(await checkout.mainDefinition(field)).toBe(value);
});

Then('the confirmation field {string} matches {string}', async ({ checkout }, field, pattern) => {
  expect(await checkout.mainDefinition(field)).toMatch(new RegExp(pattern, 'i'));
});
