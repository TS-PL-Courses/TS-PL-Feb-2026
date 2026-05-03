import { Page, BrowserContext, Locator } from '@playwright/test';
import BasePage from '@tests/pages/Base.page';

export default class PlanPage extends BasePage {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);

    this.URL = 'https://st2016.inv.bg/settings/plan';
    this.TITLE = 'Абонамент - QA Ground';
  }
  public PLAN_CARD = (planName: string): Locator =>
    this.page
      .locator('.plansv2entry')
      .filter({
        has: this.page.locator('.plansv2header h3', {
          hasText: planName,
        }),
      })
      .first();

  public PLAN_PRICE = (planName: string, price: string): Locator =>
    this.PLAN_CARD(planName).locator('.plansv2header h4').filter({ hasText: price });

  public PLAN_VALUE = (planName: string, value: string): Locator =>
    this.PLAN_CARD(planName).locator('.plansv2value').filter({ hasText: value });

  public PLAN_FEATURE = (planName: string, feature: string): Locator =>
    this.PLAN_CARD(planName).locator('.plansv2features .plansv2feature').filter({
      hasText: feature,
    });
}
