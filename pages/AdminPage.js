const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage');

class AdminPage extends BasePage {
  async open() {
    await this.goto('admin');
    await this.expectLoaded();
  }

  async expectLoaded() {
    await expect(this.page.getByRole('heading', { name: 'Order management' })).toBeVisible();
  }

  orderRow(orderId) {
    return this.page.getByRole('row').filter({ hasText: orderId });
  }
}

module.exports = { AdminPage };
