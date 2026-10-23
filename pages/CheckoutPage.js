const { expect } = require('@playwright/test');
const { BasePage, money } = require('./BasePage');

class CheckoutPage extends BasePage {
  constructor(page) {
    super(page);
    this.summary = page.getByRole('complementary');
    this.termsCheckbox = page.getByRole('checkbox', { name: /I agree to the terms/ });
    this.placeOrderButton = page.getByRole('button', { name: /Place order/ });
    this.email = page.getByLabel('Email');
    this.phone = page.getByLabel('Phone');
    this.zip = page.getByLabel('ZIP code');
    this.cardNumber = page.getByLabel('Card number');
  }

  async open() {
    await this.goto('checkout');
    await expect(this.page.getByRole('heading', { name: 'Checkout' })).toBeVisible();
  }

  async fillValidDetails(data) {
    await this.fillContactDetails(data);
    await this.fillCardDetails(data);
    await this.termsCheckbox.check();
  }

  async fillContactDetails(data) {
    await this.page.getByLabel('First name').fill(data.firstName);
    await this.page.getByLabel('Last name').fill(data.lastName);
    await this.email.fill(data.email);
    await this.phone.fill(data.phone);
    await this.page.getByLabel('Street address').fill(data.address);
    await this.page.getByLabel('City').fill(data.city);
    await this.page.getByLabel('State').selectOption({ label: data.state });
    await this.zip.fill(data.zip);
  }

  async fillCardDetails(data) {
    await this.page.getByLabel('Name on card').fill(data.cardholder);
    await this.cardNumber.fill(data.cardNumber);
    await this.page.getByLabel('Expiry').fill(data.expiry);
    await this.page.getByLabel('CVV').fill(data.cvv);
  }

  async choose(optionPattern) {
    await this.page.getByRole('radio', { name: optionPattern }).check();
  }

  async amount(label) {
    return money(await this.definitionText(this.summary, label));
  }

  async placeOrder() {
    await this.placeOrderButton.click();
  }

  async confirmedOrderId() {
    return (await this.page.getByText(/^NS-\d+$/).innerText()).trim();
  }
}

module.exports = { CheckoutPage };
