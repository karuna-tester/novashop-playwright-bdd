const { expect } = require('@playwright/test');
const { createBdd } = require('playwright-bdd');
const { test } = require('./fixtures');

const { When, Then } = createBdd(test);

When('the manager marks the placed order as shipped', async ({ admin, ctx }) => {
  await admin.orderRow(ctx.orderId).getByRole('button', { name: 'Mark shipped' }).click();
});

When('the manager marks the placed order as delivered', async ({ admin, ctx }) => {
  await admin.orderRow(ctx.orderId).getByRole('button', { name: 'Mark delivered' }).click();
});

Then('the order management page is displayed', async ({ admin }) => {
  await admin.expectLoaded();
});

Then('the placed order row in order management shows {string}', async ({ admin, ctx }, status) => {
  await expect(admin.orderRow(ctx.orderId)).toContainText(status);
});

Then('the order management {string} metric is {string}', async ({ admin }, metric, value) => {
  expect(await admin.mainDefinition(metric)).toBe(value);
});
