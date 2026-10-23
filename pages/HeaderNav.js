const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage');

class HeaderNav extends BasePage {
  constructor(page) {
    super(page);
    this.cartLink = page.getByRole('link', { name: /Cart with/ });
    this.ordersLink = page.getByRole('link', { name: 'My orders', exact: true });
    this.logoutButton = page.getByRole('button', { name: 'Log out' });
  }

  async openCart() {
    await this.cartLink.click();
    await expect(this.page.getByRole('heading', { name: 'Your cart' })).toBeVisible();
  }

  async openOrders() {
    await this.ordersLink.click();
    await expect(this.page.getByRole('heading', { name: 'My orders' })).toBeVisible();
  }

  async logout() {
    await this.logoutButton.click();
    await expect(this.page.getByRole('heading', { name: 'Welcome to Nova Shop' })).toBeVisible();
  }
}

module.exports = { HeaderNav };
