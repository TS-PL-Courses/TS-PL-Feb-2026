import { Page, BrowserContext, Locator } from '@playwright/test';
import BasePage from '@tests/pages/Base.page';

export default class NewInvoicePage extends BasePage {
  public readonly NEW_PLAN_PAGE_LINK: Locator;

  public readonly BUSINESS_PLAN_NAME: (name: string) => Locator;
  public readonly BUSINESS_PLAN_COSTS: (cost: string) => Locator;

  // public readonly NEW_ARTICLES_PAGE_LINK: Locator;
  // public readonly DOCUMENTS_PAGE_LINK: Locator;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);

    this.URL = 'https://st2016.inv.bg/invoices/new';
    this.TITLE = 'Нова Фактура - QA Ground';

    /* Locators: */
    this.NEW_PLAN_PAGE_LINK = this.page.getByRole('link', {
      name: 'Преминете на по-висок план',
      exact: true,
    });

    this.BUSINESS_PLAN_NAME = (name: string) =>
      this.page.getByRole('heading', { level: 3, name: name, exact: true });

    this.BUSINESS_PLAN_COSTS = (cost: string) =>
      this.page.getByRole('heading', { level: 4, name: cost, exact: true });

    // this.CLIENTS_PAGE_LINK = this.page.getByRole('link', { name: 'Клиенти', exact: true });
    // this.NEW_ARTICLES_PAGE_LINK = this.page.getByRole('link', { name: 'Артикули', exact: true });
    // this.DOCUMENTS_PAGE_LINK = this.page.getByRole('link', { name: 'Документи' });
  }
}
