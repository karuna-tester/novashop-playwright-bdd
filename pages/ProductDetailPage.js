const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage');
const { ProductCard } = require('./ProductCard');

class ProductDetailPage extends BasePage {
  constructor(page) {
    super(page);
    this.quantity = page.getByRole('textbox', { name: 'Quantity' });
    this.increaseButton = page.getByRole('button', { name: 'Increase quantity' });
    this.decreaseButton = page.getByRole('button', { name: 'Decrease quantity' });
    this.addToCartButton = page.getByRole('button', { name: 'Add to cart' });
    this.tabPanel = page.getByRole('tabpanel');
  }

  async open(productId = 'p1') {
    await this.goto(`product/${productId}`);
    await expect(this.page.getByRole('heading', { level: 1 })).toBeVisible();
  }

  async unitPrice() {
    return new ProductCard(this.page.getByRole('main')).price();
  }

  async selectOption(option) {
    await this.page.getByText(option, { exact: true }).click();
    await expect(this.page.getByRole('radio', { name: option })).toBeChecked();
  }

  async setQuantity(quantity) {
    await this.quantity.fill(String(quantity));
  }

  async increaseQuantity() {
    await this.increaseButton.click();
  }

  async decreaseQuantity() {
    await this.decreaseButton.click();
  }

  async addToCart() {
    await this.addToCartButton.click();
  }

  tab(name) {
    return this.page.getByRole('tab', { name });
  }
}

module.exports = { ProductDetailPage };
