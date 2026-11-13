class ProductCard {
  constructor(root) {
    this.root = root;
  }

  async name() {
    const links = this.root.getByRole('link');
    return (await links.nth(1).innerText()).trim();
  }

  async price() {
    const text = await this.root.getByText(/\$\d+\.\d{2}/).first().innerText();
    return Number(text.replace(/[$,]/g, ''));
  }

  async open() {
    await this.root.getByRole('link').nth(1).click();
  }

  async addToCart() {
    await this.root.getByRole('button', { name: 'Add to cart' }).click();
  }
}

module.exports = { ProductCard };
