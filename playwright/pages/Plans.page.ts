import { Page, BrowserContext, Locator } from '@playwright/test';
import BasePage from '@tests/pages/Base.page';

export default class PlanPage extends BasePage {

  public readonly PLAN_NAME: (name: string) => Locator;
  public readonly PLAN_COSTS_EURO: (euro: string) => Locator;
  public readonly PLAN_COSTS_BGN: (bgn: string) => Locator;
  public readonly PLAN_COMMENTS: (text: string) => Locator;
  public readonly PLAN_BENEFITS: (plan: string, clientNumber: string, invoices: string, employeesNumber: string) => Locator;
  public readonly PLAN_OTHER_BENEFITS: (plan: string, logo: string, signature: string) => Locator;
  

  constructor(page: Page, context: BrowserContext) {
    super(page, context);

    this.URL = 'https://st2016.inv.bg/settings/plan';
    this.TITLE = 'Абонамент - QA Ground';

    this.PLAN_NAME = (name) => this.page.getByRole('heading', {level: 3, name, exact: true});
    this.PLAN_COSTS_EURO = (euro) => this.page.getByRole('heading', {level: 4, name: euro, exact: true});
    this.PLAN_COSTS_BGN = (bgn) => this.page.getByRole('heading', {level: 4, name: bgn, exact: true});
    this.PLAN_COMMENTS = (text) => this.page.getByRole('heading', {level: 5, name: text, exact: true});
    this.PLAN_BENEFITS = (plan, clientNumber, invoices, employeesNumber) => this.page
        .locator('.plansv2entry', {
          has: this.page.getByRole('heading', { name: plan, exact: true }),
        })
        .locator(`:has-text("${employeesNumber}")`)
        .locator(`:has-text("${invoices}")`)
        .locator(`:has-text("${clientNumber}")`);

    this.PLAN_OTHER_BENEFITS = (plan, logo, signature) => this.page
        .locator('.plansv2entry', {
          has: this.page.getByRole('heading', { name: plan, exact: true }),
        })
        .locator(`:has-text("${logo}")`)
        .locator(`:has-text("${signature}")`);
  }
}