import { Page, BrowserContext } from '@playwright/test';

import LoginPage from '@tests/pages/Login.page';
import LandingPage from '@tests/pages/Landing.page';
import DocumentsPage from '@tests/pages/Documents.page';
import InvoicesPage from '@tests/pages/Invoices.page';
import PlansPage from '@tests/pages/Plans.page';
import ClientsPage from '@tests/pages/Clients.page';

export default class PageFactory {
  public readonly page: Page;
  public readonly context: BrowserContext;

  public readonly loginPage: LoginPage;
  public readonly landingPage: LandingPage;
  public readonly documentPage: DocumentsPage;
  public readonly invoicesPage: InvoicesPage;
  public readonly plansPage: PlansPage;
  public readonly clientsPage: ClientsPage;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;

    this.loginPage = new LoginPage(page, context);
    this.landingPage = new LandingPage(page, context);
    this.documentPage = new DocumentsPage(page, context);
    this.invoicesPage = new InvoicesPage(page, context);
    this.plansPage = new PlansPage(page, context);
    this.clientsPage = new ClientsPage(page, context);
  }
}
