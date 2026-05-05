import PageFactory from '@tests/pages/Page.factory';
import { test, expect, Page, BrowserContext } from '@playwright/test';

export default class NewInvoiceSteps extends PageFactory {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  async navigateToNewPlan() {
    await test.step('Choose a new plan', async () => {
      await this.newInvoicePage.NAVIGATE_NEW_PLAN.click();
      await expect(this.page, 'Vefiry page title').toHaveTitle('Абонамент - QA Ground');
    });
  }

  async verifyPlanName(planName: string) {
    await test.step("Verify plan's name", async () => {
      await expect(this.newInvoicePage.PLAN_NAME(planName)).toBeVisible();
    });
  }

  async verifyPlanCost(planCost: string) {
    await test.step("Verify plan's cost", async () => {
      await expect(this.newInvoicePage.PLAN_COST(planCost)).toBeVisible();
    });
  }

  async verifyEmployee(
    planName: string,
    employeesNumber: string,
    invoices: string,
    clientNumber: string,
  ) {
    await test.step('Verify employee benefits', async () => {
      await expect(
        this.newInvoicePage.EMPLOYEE(planName, employeesNumber, invoices, clientNumber),
      ).toBeVisible();
    });
  }

  async verifyFeatures(planName: string, features: string) {
    await test.step('Verify features', async () => {
      await expect(this.newInvoicePage.FEATURES(planName, features)).toBeVisible();
    });
  }
}
