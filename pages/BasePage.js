const { expect } = require('@playwright/test');

class BasePage {
  constructor(page) {
    this.page = page;
  }

  async goto(path = './') {
    await this.page.goto(path);
  }

  // Reads the <dd> that belongs to the <dt> whose text starts with termName.
  async definitionText(scope, termName) {
    const terms = await scope.getByRole('term').allInnerTexts();
    const expectedTerm = termName.toLocaleLowerCase();
    const index = terms.findIndex((term) => term.trim().toLocaleLowerCase().startsWith(expectedTerm));
    if (index < 0) {
      throw new Error(`Could not find summary term "${termName}". Available terms: ${terms.join(', ')}`);
    }
    return scope.getByRole('definition').nth(index).innerText();
  }

  async mainDefinition(termName) {
    return this.definitionText(this.page.getByRole('main'), termName);
  }

  async expectHeading(name) {
    await expect(this.page.getByRole('heading', { name })).toBeVisible();
  }
}

function money(value) {
  const amount = Number(String(value).replace(/[^\d.-]/g, ''));
  if (!Number.isFinite(amount)) {
    throw new Error(`Could not parse currency value: ${value}`);
  }
  return amount;
}

function roundCurrency(value) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

module.exports = { BasePage, money, roundCurrency };
