import { Page, BrowserContext, Locator } from '@playwright/test';
import BasePage from '@tests/pages/Base.page';

export default class InvoicesPage extends BasePage {
  public readonly UPGRADE_PLAN_LINK: Locator;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);

    this.URL = 'https://st2016.inv.bg/invoices/new';
    this.TITLE = 'Нова фактура - QA Ground';

    this.UPGRADE_PLAN_LINK = this.page.getByRole('link', {
      name: 'Преминете на по-висок план',
    });
  }
}
