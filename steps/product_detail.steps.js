const { expect } = require('@playwright/test');
const { createBdd } = require('playwright-bdd');
const { test } = require('./fixtures');

const { Given, When, Then } = createBdd(test);

Given('the customer opens the detail page for product {string}', async ({ product }, productId) => {
  await product.open(productId);
});

Given('the customer notes the product unit price', async ({ product, ctx }) => {
  ctx.unitPrice = await product.unitPrice();
});

Given('the customer notes the current product panel content', async ({ product, ctx }) => {
  ctx.panelText = await product.tabPanel.innerText();
});

When('the customer selects the product option {string}', async ({ product }, option) => {
  await product.selectOption(option);
});

When('the customer adds the product to the cart', async ({ product }) => {
  await product.addToCart();
});

When('the customer enters the product quantity {string}', async ({ product }, quantity) => {
  await product.setQuantity(quantity);
});

When('the customer opens the {string} product tab', async ({ product }, name) => {
  await product.tab(name).click();
});

Then('the product heading {string} is displayed', async ({ page }, name) => {
  await expect(page.getByRole('heading', { name })).toBeVisible();
});

Then('the product quantity is {string}', async ({ product }, quantity) => {
  await expect(product.quantity).toHaveValue(quantity);
});

Then('the decrease quantity button is disabled', async ({ product }) => {
  await expect(product.decreaseButton).toBeDisabled();
});

Then('the increase quantity button is disabled', async ({ product }) => {
  await expect(product.increaseButton).toBeDisabled();
});

Then('the {string} tab is selected and the panel content has changed', async ({ product, ctx }, name) => {
  await expect(product.tab(name)).toHaveAttribute('aria-selected', 'true');
  await expect(product.tabPanel).not.toHaveText(ctx.panelText);
  ctx.panelText = await product.tabPanel.innerText();
});
