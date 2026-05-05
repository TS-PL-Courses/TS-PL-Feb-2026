import { Page, BrowserContext, Locator } from '@playwright/test';
import BasePage from '@tests/pages/Base.page';

export default class NewInvoicePage extends BasePage {
  public readonly NEW_PLAN_PAGE_LINK: Locator;

  public readonly PLAN_NAME: (name: string) => Locator;
  public readonly PLAN_COSTS: (cost: string) => Locator;
  public readonly BENEFITS: (
    planName: string,
    employeesNumber: string,
    invoices: string,
    clientNumber: string,
  ) => Locator;
  public readonly OTHER_BENEFITS: (planName: string, otherBenefits: string) => Locator;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);

    this.URL = 'https://st2016.inv.bg/invoices/new';
    this.TITLE = 'Нова Фактура - QA Ground';

    
    this.NEW_PLAN_PAGE_LINK = this.page.getByRole('link', {
      name: 'Преминете на по-висок план',
      exact: true,
    });

    this.PLAN_NAME = (name: string) =>
      this.page.getByRole('heading', { level: 3, name: name, exact: true });

    this.PLAN_COSTS = (cost: string) =>
      this.page.getByRole('heading', { level: 4, name: cost, exact: true });

    this.BENEFITS = (
      planName: string,
      employeesNumber: string,
      invoices: string,
      clientNumber: string,
    ) =>
      this.page
        .locator('.plansv2entry', {
          has: this.page.getByRole('heading', { name: planName, exact: true }),
        })
        .locator(`:has-text("${employeesNumber}")`)
        .locator(`:has-text("${invoices}")`)
        .locator(`:has-text("${clientNumber}")`);

    this.OTHER_BENEFITS = (planName: string, otherBenefits: string) =>
      this.page
        .locator('.plansv2entry', {
          has: this.page.getByRole('heading', { name: planName, exact: true }),
        })
        .locator('.plansv2feature', { hasText: otherBenefits });
  }
}
