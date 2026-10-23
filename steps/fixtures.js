const base = require('playwright-bdd');
const { LoginPage } = require('../pages/LoginPage');
const { HeaderNav } = require('../pages/HeaderNav');
const { ProductsPage } = require('../pages/ProductsPage');
const { ProductDetailPage } = require('../pages/ProductDetailPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');
const { OrdersPage } = require('../pages/OrdersPage');
const { AdminPage } = require('../pages/AdminPage');

exports.test = base.test.extend({
  // Per-scenario scratch space for values captured in one step and asserted in a later one.
  ctx: async ({}, use) => {
    await use({});
  },
  loginPage: async ({ page }, use) => use(new LoginPage(page)),
  header: async ({ page }, use) => use(new HeaderNav(page)),
  products: async ({ page }, use) => use(new ProductsPage(page)),
  product: async ({ page }, use) => use(new ProductDetailPage(page)),
  cart: async ({ page }, use) => use(new CartPage(page)),
  checkout: async ({ page }, use) => use(new CheckoutPage(page)),
  orders: async ({ page }, use) => use(new OrdersPage(page)),
  admin: async ({ page }, use) => use(new AdminPage(page)),
});
