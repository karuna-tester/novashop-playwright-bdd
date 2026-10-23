const { expect } = require('@playwright/test');
const { createBdd } = require('playwright-bdd');
const { test } = require('./fixtures');
const { roundCurrency } = require('../pages/BasePage');

const { Given, When, Then } = createBdd(test);

Given('the customer adds the first listed product to the cart', async ({ products, ctx }) => {
  const card = products.card();
  ctx.productName = await card.name();
  ctx.productPrice = await card.price();
  await card.addToCart();
});

Given('the customer opens the cart', async ({ header }) => {
  await header.openCart();
});

Given('the customer notes the cart total', async ({ cart, ctx }) => {
  ctx.cartTotal = await cart.amount('Total');
});

When('the customer sets the quantity of {string} to {int}', async ({ cart }, productName, quantity) => {
  await cart.setItemQuantity(productName, quantity);
});

When('the customer removes the added product from the cart', async ({ cart, ctx }) => {
  await cart.removeItem(ctx.productName);
});

When('the customer applies the coupon {string}', async ({ cart }, code) => {
  await cart.applyCoupon(code);
});

Then('the cart line for {string} shows quantity {int} and a line total of twice the unit price', async ({ cart, ctx }, productName, quantity) => {
  await expect(cart.row(productName)).toContainText(String(quantity));
  expect(await cart.lineTotal(productName)).toBe(roundCurrency(ctx.unitPrice * quantity));
});

Then('the empty cart message is displayed', async ({ page }) => {
  await expect(page.getByText(/Your cart is empty|cart is empty/i)).toBeVisible();
});

Then('the coupon status contains {string}', async ({ cart }, text) => {
  await expect(cart.status).toContainText(text);
});

Then('the cart subtotal equals the product price', async ({ cart, ctx }) => {
  expect(await cart.amount('Subtotal')).toBe(ctx.productPrice);
});

Then('the cart discount is 10 percent of the subtotal and the total reconciles', async ({ cart }) => {
  const subtotal = await cart.amount('Subtotal');
  const discount = await cart.amount('Discount (SAVE10)');
  const tax = await cart.amount('Tax (8%)');
  const total = await cart.amount('Total');
  expect(discount).toBe(roundCurrency(subtotal * 0.1));
  expect(total).toBe(roundCurrency(subtotal - discount + tax));
});

Then('the added product is listed in the cart', async ({ cart, ctx }) => {
  await expect(cart.row(ctx.productName)).toBeVisible();
});

Then('the cart summary lists the discount {string}', async ({ cart }, label) => {
  await expect(cart.summary.getByRole('term').filter({ hasText: label })).toBeVisible();
});

Then('the cart total is unchanged', async ({ cart, ctx }) => {
  expect(await cart.amount('Total')).toBe(ctx.cartTotal);
});
