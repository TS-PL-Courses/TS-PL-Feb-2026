import PageFactory from '@tests/pages/Page.factory';
import { test, expect, Page, BrowserContext } from '@playwright/test';

export default class SharedSteps extends PageFactory {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  async navigateToSite(url: string) {
    await test.step('Navigate to Site', async () => {
      await this.page.goto(url);
      // await expect(this.page, 'Verify page title').toHaveTitle(this.loginPage.TITLE);
    });
  }

  async login(username: string, password: string, usingEnterKey?: boolean) {
    await test.step('Login', async () => {
      await this.loginPage.EMAIL_INPUT.fill(username);
      await this.loginPage.PASSWORD_INPUT.fill(password);
      // wait for navigation after login action to handle slower responses
      const navPromise = this.page.waitForNavigation({ waitUntil: 'load', timeout: 15000 });
      if (!usingEnterKey) {
        await Promise.all([navPromise, this.loginPage.LOGIN_BUTTON.click()]);
      } else {
        await Promise.all([navPromise, this.loginPage.PASSWORD_INPUT.press('Enter')]);
      }
      await expect(this.page, 'Verify page title').toHaveTitle(this.landingPage.TITLE, {
        timeout: 15000,
      });
    });
  }

  async loginFail(username: string, password: string, errorMessage: string) {
    await test.step('Login', async () => {
      await this.loginPage.EMAIL_INPUT.fill(username);
      await this.loginPage.PASSWORD_INPUT.fill(password);
      await this.loginPage.LOGIN_BUTTON.click();
      await expect(this.loginPage.ERROR_MESSAGE, 'Verify login error message').toContainText(
        errorMessage,
      );
    });
  }
}
