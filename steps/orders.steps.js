const { expect } = require('@playwright/test');
const { createBdd } = require('playwright-bdd');
const { test } = require('./fixtures');
const { validCheckout } = require('./testData');

const { Given, When, Then } = createBdd(test);

Given('the customer opens their order history', async ({ header }) => {
  await header.openOrders();
});

When('the customer opens the details of the placed order', async ({ orders, ctx }) => {
  await orders.row(ctx.orderId).getByRole('button', { name: 'Details' }).click();
});

When('the customer cancels the order and confirms the cancellation', async ({ page, ctx }) => {
  await page.getByRole('button', { name: 'Cancel order' }).click();
  const confirmation = page.getByRole('dialog');
  await expect(confirmation).toContainText(`Order ${ctx.orderId}`);
  await confirmation.getByRole('button', { name: 'Yes, cancel order' }).click();
});

Then('the placed order is listed with status {string}', async ({ orders, ctx }, status) => {
  await expect(orders.row(ctx.orderId)).toContainText(status);
});

Then('the placed order is listed with status {string} and the noted total', async ({ orders, ctx }, status) => {
  const row = orders.row(ctx.orderId);
  await expect(row).toContainText(status);
  await expect(row).toContainText(`$${ctx.checkoutTotal.toFixed(2)}`);
});

Then('the order details show the shipping destination of the checkout customer', async ({ page }) => {
  const { firstName, lastName, city } = validCheckout;
  await expect(page.getByText(`Ship to ${firstName} ${lastName}, ${city}`)).toBeVisible();
});
