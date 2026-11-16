const { BasePage, money } = require('./BasePage');

class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this.summary = page.getByRole('complementary');
    this.couponInput = page.getByRole('textbox', { name: 'Coupon code' });
    this.applyButton = page.getByRole('button', { name: 'Apply' });
    this.status = page.getByRole('status');
  }

  row(productName) {
    return this.page.getByRole('listitem').filter({ hasText: productName });
  }

  async applyCoupon(code) {
    await this.couponInput.fill(code);
    await this.applyButton.click();
  }

  async amount(label) {
    return money(await this.definitionText(this.summary, label));
  }

  async lineTotal(productName) {
    const amounts = await this.row(productName).getByText(/\$\d+\.\d{2}/).allInnerTexts();
    return money(amounts[amounts.length - 1] ?? '');
  }

  async setItemQuantity(productName, quantity) {
    const row = this.row(productName);
    const currentText = await row.getByText(/^\d+$/).innerText();
    const delta = quantity - Number(currentText);
    const button = delta > 0
      ? row.getByRole('button', { name: `Increase ${productName}` })
      : row.getByRole('button', { name: `Decrease ${productName}` });
    for (let index = 0; index < Math.abs(delta); index += 1) {
      await button.click();
    }
  }

  async removeItem(productName) {
    await this.page.getByRole('button', { name: `Remove ${productName}` }).click();
  }
}

module.exports = { CartPage };
