const { expect } = require('@playwright/test');
const { createBdd } = require('playwright-bdd');
const { test } = require('./fixtures');
const { ProductCard } = require('../pages/ProductCard');

const { Given, When, Then } = createBdd(test);

Given('the customer opens the product catalogue', async ({ products }) => {
  await products.open();
});

When('the customer searches for the name of the first displayed product', async ({ products, ctx }) => {
  ctx.productName = await products.card().name();
  await products.search(ctx.productName);
});

When('the customer searches for a product that does not exist', async ({ products }) => {
  await products.search(`no-such-product-${Date.now()}`);
});

When('the customer selects the category {string}', async ({ products }, category) => {
  await products.category(category);
});

When('the customer enables the in-stock filter', async ({ products }) => {
  await products.inStockOnly();
});

When('the customer sorts products by {string}', async ({ products }, option) => {
  await products.sort(option);
});

Then('exactly one product is listed and it shows that name', async ({ products, ctx }) => {
  await expect(products.cards).toHaveCount(1);
  await expect(products.cards.first()).toContainText(ctx.productName);
});

Then('every listed product belongs to the {string} category', async ({ products }, category) => {
  const cards = await products.cards.all();
  expect(cards.length).toBeGreaterThan(0);
  for (const card of cards) {
    await expect(card).toContainText(category);
  }
});

Then('no sold-out products are listed', async ({ products }) => {
  await expect(products.soldOutButtons).toHaveCount(0);
});

Then('at least one product is still listed', async ({ products }) => {
  expect(await products.cards.count()).toBeGreaterThan(0);
});

Then('the listed prices are in ascending order', async ({ products }) => {
  const cards = await products.cards.all();
  const prices = [];
  for (const card of cards) {
    prices.push(await new ProductCard(card).price());
  }
  expect(prices.length).toBeGreaterThan(1);
  expect(prices).toEqual([...prices].sort((first, second) => first - second));
});

Then('the first listed product has the highest rating', async ({ products, page }) => {
  const rating = Number(await products.cards.first().getByText(/^\d\.\d$/).innerText());
  const ratings = (await page.getByText(/^\d\.\d$/).allInnerTexts()).map(Number);
  expect(rating).toBe(Math.max(...ratings));
});

Then('no product cards are listed', async ({ products }) => {
  await expect(products.cards).toHaveCount(0);
});

Then('a no-results message is displayed', async ({ page }) => {
  await expect(page.getByText(/No products|No results/i)).toBeVisible();
});

Then('exactly one sold-out product is listed', async ({ products }) => {
  await expect(products.soldOutCards()).toHaveCount(1);
});

Then('its sold out button is disabled', async ({ products }) => {
  await expect(products.soldOutCards().getByRole('button', { name: 'Sold out' })).toBeDisabled();
});
