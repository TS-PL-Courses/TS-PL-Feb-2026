import PageFactory from '@tests/pages/Page.factory';
import { test, expect, Page, BrowserContext } from '@playwright/test';

export default class NewInvoiceSteps extends PageFactory {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  async navigateToNewPlanPage() {
    await test.step('Navigate To New Plan Page', async () => {
      await this.newInvoicePage.NEW_PLAN_PAGE_LINK.click();
      await expect(this.page, 'Verify page title').toHaveTitle('Абонамент - QA Ground');
    });
  }

  async verifyPlanName(expectedName: string) {
    await test.step('Verify Plan Name', async () => {
      await expect(this.newInvoicePage.PLAN_NAME(expectedName)).toBeVisible();
    });
  }

  async verifyPlanCosts(cost: string) {
    await test.step('Verify Plan Cost', async () => {
      await expect(this.newInvoicePage.PLAN_COSTS(cost)).toBeVisible();
    });
  }

  async verifyBenefits(
    planName: string,
    employeesNumber: string,
    invoices: string,
    clientNumber: string,
  ) {
    await test.step('Verify benefits', async () => {
      await expect(
        this.newInvoicePage.BENEFITS(planName, employeesNumber, invoices, clientNumber),
      ).toBeVisible();
    });
  }

  async verifyOtherBenefits(planName: string, otherBenefits: string) {
    await test.step('Verify other benefits', async () => {
      await expect(this.newInvoicePage.OTHER_BENEFITS(planName, otherBenefits)).toBeVisible();
    });
  }
}
