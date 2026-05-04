import PageFactory from '@tests/pages/Page.factory';
import { test, expect, Page, BrowserContext } from '@playwright/test';

export default class NewInvoiceSteps extends PageFactory {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  async upgradePlan() {
    await test.step('Click the Upgrade plan button', async () => {
      await this.newInvoicePage.UPGRADE_PLAN_LINK.click();
      await expect(this.page, 'Verify page title').toHaveTitle('Абонамент - QA Ground');
    });
  }
}
