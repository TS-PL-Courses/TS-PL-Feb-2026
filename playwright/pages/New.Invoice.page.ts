import { Page, BrowserContext, Locator } from '@playwright/test';
import BasePage from '@tests/pages/Base.page';

export default class NewInvoicePage extends BasePage {

  public readonly PLAN_BUTTON: Locator;
  public readonly INVOICE_LIMIT_BOX: Locator;
  

  constructor(page: Page, context: BrowserContext) {
    super(page, context);

    this.URL = 'https://st2016.inv.bg/invoices/new';
    this.TITLE = 'Нова фактура - QA Ground';
    
   // this.INVOICE_LIMIT_BOX = this.page.locator('.popup_body');
    this.PLAN_BUTTON = this.page.getByRole('link', { name: 'Преминете на по-висок план',  exact: true });

  }
}