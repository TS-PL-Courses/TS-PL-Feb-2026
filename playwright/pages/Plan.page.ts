import { Page, BrowserContext, Locator } from '@playwright/test';
import BasePage from '@tests/pages/Base.page';

export default class PlanPage extends BasePage {
  public readonly PLAN_CARD: (planName: string) => Locator;
  public readonly PLAN_PRICE: (planName: string, price: string) => Locator;
  public readonly PLAN_VALUE: (planName: string, value: string) => Locator;
  public readonly PLAN_FEATURE: (planName: string, feature: string) => Locator;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);

    this.URL = 'https://st2016.inv.bg/settings/plan';
    this.TITLE = 'Абонамент - QA Ground';

    this.PLAN_CARD = (planName: string) =>
      this.page
        .locator('.plansv2entry')
        .filter({
          has: this.page.locator('.plansv2header h3', {
            hasText: planName,
          }),
        })
        .first();

    this.PLAN_PRICE = (planName: string, price: string) =>
      this.PLAN_CARD(planName).locator('.plansv2header h4').filter({ hasText: price });

    this.PLAN_VALUE = (planName: string, value: string) =>
      this.PLAN_CARD(planName).locator('.plansv2value').filter({ hasText: value });

    this.PLAN_FEATURE = (planName: string, feature: string) =>
      this.PLAN_CARD(planName)
        .locator('.plansv2features .plansv2feature')
        .filter({ hasText: feature });
  }
}
