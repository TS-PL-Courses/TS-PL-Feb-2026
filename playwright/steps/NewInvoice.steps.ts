import PageFactory from '@tests/pages/Page.factory';
import { test, expect, Page, BrowserContext, Locator } from '@playwright/test';

export default class NewInvoiceSteps extends PageFactory {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  async navigateToNewPlanPage() {
    await test.step('Navigate New Plan Page', async () => {
      await this.newInvoicePage.NEW_PLAN_PAGE_LINK.click();
      await expect(this.page, 'Verify page title').toHaveTitle('Абонамент - QA Ground');
    });
  }

  async verifyBusinessPlanName(expectedName: string) {
    await test.step('Check Business Plan Name', async () => {
      await expect(this.newInvoicePage.BUSINESS_PLAN_NAME(expectedName)).toBeVisible();
    });
  }

  async verifyBusinessPlanCosts(cost: string) {
    await test.step('Check Business Plan Cost', async () => {
      await expect(this.newInvoicePage.BUSINESS_PLAN_COSTS(cost)).toBeVisible();
    });
  }
}
