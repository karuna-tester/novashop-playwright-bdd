const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage');

const USER_ENV = {
  standard: 'SHOP_STANDARD_USER',
  admin: 'SHOP_ADMIN_USER',
  locked: 'SHOP_LOCKED_USER',
  slow: 'SHOP_SLOW_USER',
  buggy: 'SHOP_BUGGY_USER',
};

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.heading = page.getByRole('heading', { name: 'Welcome to Nova Shop' });
    this.username = page.getByRole('textbox', { name: 'Username' });
    this.password = page.getByLabel('Password');
    this.submit = page.getByRole('button', { name: 'Sign in' });
    this.error = page.getByTestId('login-error');
  }

  // Credentials come from the local environment (.env), never from source control.
  static credentialsFor(role) {
    const username = process.env[USER_ENV[role]] || '';
    const password = process.env.SHOP_PASSWORD || '';
    return { username, password };
  }

  static isConfigured(role) {
    return Boolean(LoginPage.credentialsFor(role).username);
  }

  async open() {
    await this.goto('./');
    await expect(this.heading).toBeVisible();
  }

  async loginValues(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.submit.click();
  }

  async login(role) {
    const { username, password } = LoginPage.credentialsFor(role);
    if (!username || !password) {
      throw new Error(`Set the local environment variables for the ${role} Nova Shop account.`);
    }
    await this.loginValues(username, password);
  }
}

module.exports = { LoginPage };
