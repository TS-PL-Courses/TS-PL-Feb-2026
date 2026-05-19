import { Page, BrowserContext, test, expect } from '@playwright/test';
import PlansPage from '@tests/pages/Plans.page';

export default class PlansSteps {
  private readonly plansPage: PlansPage;

  constructor(page: Page, context: BrowserContext) {
    this.plansPage = new PlansPage(page, context);
  }

  async verifyOnPlansPage(): Promise<void> {
    await test.step('Verify Plans page is displayed', async () => {
      await expect(this.plansPage.PAGE_IDENTIFIER, 'Verify Plans page identifier').toBeVisible();
    });
  }

  async verifyPlanDetails(
    planName: string,
    priceBGN: string,
    priceEUR: string,
    benefits: string[],
  ): Promise<void> {
    await test.step(`Verify details for plan: ${planName}`, async () => {
      // Ensure Plans page is displayed and stable
      await this.plansPage.PAGE_IDENTIFIER.waitFor({ state: 'visible', timeout: 15000 });

      const plan = this.plansPage.PLAN_CARD(planName);

      await expect(plan, `Plan "${planName}" should be visible`).toBeVisible({ timeout: 10000 });

      // Strict price checks: match exact strings provided in test data
      if (priceBGN) {
        const exactBGN = this.plansPage.page.getByText(priceBGN, { exact: true }).first();
        await expect(exactBGN, `Verify BGN price for "${planName}"`).toBeVisible({
          timeout: 10000,
        });
      }
      if (priceEUR) {
        const exactEUR = this.plansPage.page.getByText(priceEUR, { exact: true }).first();
        await expect(exactEUR, `Verify EUR price for "${planName}"`).toBeVisible({
          timeout: 10000,
        });
      }

      for (const benefit of benefits) {
        await expect(
          this.plansPage.page.getByText(benefit).first(),
          `Verify benefit "${benefit}" for "${planName}"`,
        ).toBeVisible({ timeout: 8000 });
      }
    });
  }
}
