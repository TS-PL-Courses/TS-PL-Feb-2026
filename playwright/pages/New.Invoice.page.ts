import { Page, BrowserContext, Locator } from '@playwright/test';
import BasePage from '@tests/pages/Base.page';

export default class NewInvoicePage extends BasePage {
  public readonly NAVIGATE_NEW_PLAN: Locator;
  public readonly PLAN_NAME: (planName: string) => Locator;
  public readonly PLAN_COST: (planCost: string) => Locator;
  public readonly EMPLOYEE: (
    planName: string,
    employeesNumber: string,
    invoices: string,
    clientNumber: string,
  ) => Locator;
  public readonly FEATURES: (planName: string, features: string) => Locator;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);

    this.URL = 'https://st2016.inv.bg/invoices/new#';
    this.TITLE = 'Нова фактура - QA Ground ';

    /* Locators: */
    this.NAVIGATE_NEW_PLAN = this.page.getByRole('link', {
      name: 'Преминете на по-висок план',
    });

    this.PLAN_NAME = (planName: string) =>
      this.page.getByRole('heading', { level: 3, name: planName, exact: true });
    this.PLAN_COST = (planCost: string) =>
      this.page.getByRole('heading', { level: 4, name: planCost, exact: true });
    this.EMPLOYEE = (
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

    this.FEATURES = (planName: string, features: string) =>
      this.page
        .locator('.plansv2entry', {
          has: this.page.getByRole('heading', { name: planName, exact: true }),
        })
        .locator('.plansv2feature', { hasText: features });
  }
}
