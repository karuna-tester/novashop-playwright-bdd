const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage');
const { ProductCard } = require('./ProductCard');

class ProductsPage extends BasePage {
  constructor(page) {
    super(page);
    this.cards = page.getByRole('listitem');
    this.searchBox = page.getByRole('searchbox', { name: 'Search products' });
    this.categorySelect = page.getByRole('combobox', { name: 'Category' });
    this.sortSelect = page.getByRole('combobox', { name: 'Sort by' });
    this.inStockCheckbox = page.getByRole('checkbox', { name: 'In stock only' });
    this.soldOutButtons = page.getByRole('button', { name: 'Sold out' });
  }

  async open() {
    await this.goto('products');
    await expect(this.page.getByRole('heading', { name: 'Products' })).toBeVisible();
  }

  async search(query) {
    await this.searchBox.fill(query);
  }

  async category(value) {
    await this.categorySelect.selectOption({ label: value });
  }

  async sort(value) {
    await this.sortSelect.selectOption({ label: value });
  }

  async inStockOnly() {
    await this.inStockCheckbox.check();
  }

  card(index = 0) {
    return new ProductCard(this.cards.nth(index));
  }

  soldOutCards() {
    return this.cards.filter({ has: this.soldOutButtons });
  }
}

module.exports = { ProductsPage };
