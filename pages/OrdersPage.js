const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage');

class OrdersPage extends BasePage {
  constructor(page) {
    super(page);
    this.statusFilter = page.getByRole('combobox', { name: 'Status' });
  }

  async open() {
    await this.goto('orders');
    await expect(this.page.getByRole('heading', { name: 'My orders' })).toBeVisible();
  }

  row(orderId) {
    return this.page.getByRole('row').filter({ hasText: orderId });
  }

  async filter(status) {
    await this.statusFilter.selectOption({ label: status });
  }
}

module.exports = { OrdersPage };
