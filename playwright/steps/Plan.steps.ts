import PageFactory from '@tests/pages/Page.factory';
import { test, expect, Page, BrowserContext } from '@playwright/test';

type PlanExpected = {
  planName: string;
  euroPrice: string | null;
  levPrice: string | null;
  clients: string;
  invoices: string;
  employees: string;
  features: string[];
};

export default class PlanSteps extends PageFactory {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  async verifyPlan(_: string, expected: PlanExpected) {
    await test.step(`Verify ${expected.planName} plan`, async () => {
      const card = this.planPage.PLAN_CARD(expected.planName);

      await expect(card, `Plan "${expected.planName}" should be visible`).toBeVisible();

      if (expected.euroPrice) {
        await expect(
          this.planPage.PLAN_PRICE(expected.planName, expected.euroPrice),
          `Plan "${expected.planName}" should have EUR price "${expected.euroPrice}"`,
        ).toContainText(expected.euroPrice);
      }

      if (expected.levPrice) {
        await expect(
          this.planPage.PLAN_PRICE(expected.planName, expected.levPrice),
          `Plan "${expected.planName}" should have BGN price "${expected.levPrice}"`,
        ).toContainText(expected.levPrice);
      }
      await expect(
        card,
        `Plan "${expected.planName}" should show clients: "${expected.clients}"`,
      ).toContainText(expected.clients);

      await expect(
        card,
        `Plan "${expected.planName}"should show invoices: "${expected.invoices}"`,
      ).toContainText(expected.invoices);

      await expect(
        card,
        `Plan "${expected.planName}"should show employees: "${expected.employees}"`,
      ).toContainText(expected.employees);
      for (const feature of expected.features) {
        await expect(
          this.planPage.PLAN_FEATURE(expected.planName, feature),
          `Plan "${expected.planName}" should have feature: "${feature}"`,
        ).toBeVisible();
      }
    });
  }
}
