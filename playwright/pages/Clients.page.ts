import { Page, BrowserContext, Locator } from '@playwright/test';
import BasePage from '@tests/pages/Base.page';

export default class ClientsPage extends BasePage {
  public readonly NEW_CLIENT_BUTTON: Locator;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);

    this.URL = 'https://st2016.inv.bg/clients/manage/';
    this.TITLE = 'Клиенти - QA Ground';

    /* Locators: */
    this.NEW_CLIENT_BUTTON = this.page.getByRole('link', { name: 'Нов клиент' });
  }
}
