import PageFactory from '@tests/pages/Page.factory';
import { test, expect, Page, BrowserContext } from '@playwright/test';

export default class NewInvoiceSteps extends PageFactory {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  async navigateToPlansPage() {
    await test.step('Navigate to Plans Page', async () => {
      await this.newInvoicePage.PLAN_BUTTON.click();
      await expect(this.page, 'Verify page title').toHaveTitle('Абонамент - QA Ground');
    });
  }
}
