import PageFactory from '@tests/pages/Page.factory';
import { test, expect, Page, BrowserContext } from '@playwright/test';

export default class InvoicesSteps extends PageFactory {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  async openNewInvoicePage() {
    await test.step('Open New Invoice page', async () => {
      await this.page.goto(this.invoicesPage.URL);
    });
  }

  async verifyNewInvoicePage() {
    await test.step('Verify New Invoice page', async () => {
      await expect(this.page, 'Verify New Invoice page title').toHaveTitle(this.invoicesPage.TITLE);
    });
  }

  async clickUpgradePlanLink() {
    await test.step('Click Upgrade Plan link', async () => {
      await this.invoicesPage.UPGRADE_PLAN_LINK.click();
    });
  }
}
