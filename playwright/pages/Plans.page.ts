import { Page, BrowserContext, Locator } from '@playwright/test';
import BasePage from '@tests/pages/Base.page';

export default class PlansPage extends BasePage {
  public readonly PLAN_BOX: (planName: string) => Locator;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);

    this.URL = 'https://st2016.inv.bg/upgrade';
    this.TITLE = 'Абонамент - QA Ground';

    this.PLAN_BOX = (planName: string) => this.page.locator('body').filter({ hasText: planName });
  }
}
