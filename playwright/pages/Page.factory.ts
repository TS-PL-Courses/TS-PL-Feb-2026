import { Page, BrowserContext } from '@playwright/test';

import LoginPage from '@tests/pages/Login.page';
import LandingPage from '@tests/pages/Landing.page';
import DocumentsPage from './Documents.page';
import NewInvoicePage from './NewInvoice.page';
import PlanPage from './Plan.page';

export default class PageFactory {
  public readonly page: Page;
  public readonly context: BrowserContext;

  public readonly loginPage: LoginPage;
  public readonly landingPage: LandingPage;
  public readonly documentPage: DocumentsPage;
  public readonly newInvoicePage: NewInvoicePage;
  public readonly planPage: PlanPage;

  constructor(page: Page, context: BrowserContext) {
    // Page Setup
    this.page = page;
    this.context = context;

    this.loginPage = new LoginPage(page, context);
    this.landingPage = new LandingPage(page, context);
    this.documentPage = new DocumentsPage(page, context);
    this.newInvoicePage = new NewInvoicePage(page, context);
    this.planPage = new PlanPage(page, context);
  }
}