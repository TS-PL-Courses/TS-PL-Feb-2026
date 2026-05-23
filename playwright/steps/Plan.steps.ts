
import PageFactory from '@tests/pages/Page.factory';
import { test, expect, Page, BrowserContext } from '@playwright/test';

export default class PlanSteps extends PageFactory {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  async verifyPlan(name: string, euro: string, bgn: string, text: string | null, clientNumber: string, invoices: string, employeesNumber: string) {
    await test.step(`Verify plan: ${name}`, async () => {
      await expect(this.plansPage.PLAN_NAME(name), `Verify plan name: ${name}`).toBeVisible();
      await expect(this.plansPage.PLAN_COSTS_EURO(euro), `Verify plan costs in euro: ${euro}`).toBeVisible();
      if (bgn) {
        await expect(this.plansPage.PLAN_COSTS_BGN(bgn), `Verify plan costs in bgn: ${bgn}`).toBeVisible();
      }
      if (text) {
        await expect(this.plansPage.PLAN_COMMENTS(text), `Verify plan comments: ${text}`).toBeVisible();
      }
      await expect(this.plansPage.PLAN_BENEFITS(name, clientNumber, invoices, employeesNumber), `Verify plan benefits: ${clientNumber} clients, ${invoices} invoices, ${employeesNumber} employees`).toBeVisible();
    });
}

}