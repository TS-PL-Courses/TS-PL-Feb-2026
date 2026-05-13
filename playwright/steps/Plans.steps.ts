import PageFactory from '@tests/pages/Page.factory';
import { test, expect, Page, BrowserContext } from '@playwright/test';

export type PlanDetails = {
  name: string;
  costLev: string;
  costEuro: string;
  benefits: string[];
  otherBenefits: string[];
};

export default class PlansSteps extends PageFactory {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  async verifyPlansPage() {
    await test.step('Verify Plans page', async () => {
      await expect(this.page, 'Verify Plans page title').toHaveTitle(this.plansPage.TITLE);
    });
  }

  async verifyPlanDetails(planDetails: PlanDetails) {
    await test.step(`Verify ${planDetails.name} plan details`, async () => {
      const planBox = this.plansPage.PLAN_BOX(planDetails.name);

      await expect(planBox, `Verify ${planDetails.name} plan is visible`).toBeVisible();

      await expect(planBox, `Verify ${planDetails.name} cost in BGN`).toContainText(
        planDetails.costLev,
      );

      await expect(planBox, `Verify ${planDetails.name} cost in EUR`).toContainText(
        planDetails.costEuro,
      );

      for (const benefit of planDetails.benefits) {
        await expect(planBox, `Verify benefit: ${benefit}`).toContainText(benefit);
      }

      for (const otherBenefit of planDetails.otherBenefits) {
        await expect(planBox, `Verify other benefit: ${otherBenefit}`).toContainText(otherBenefit);
      }
    });
  }
}
