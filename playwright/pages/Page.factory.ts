import { Page, BrowserContext } from '@playwright/test';

import LoginPage from '@tests/pages/Login.page';
import LandingPage from '@tests/pages/Landing.page';
import DocumentsPage from './Documents.page';
import NewInvoicePage from './NewInvoice.page';
import PlanPage from './Plan.page';
import ClientsPage from './Clients.page';
import AddClientPage from './AddClient.page';

export default class PageFactory {
  public readonly page: Page;
  public readonly context: BrowserContext;

  public readonly loginPage: LoginPage;
  public readonly landingPage: LandingPage;
  public readonly documentPage: DocumentsPage;
  public readonly newInvoicePage: NewInvoicePage;
  public readonly planPage: PlanPage;
  public readonly clientsPage: ClientsPage;
  public readonly addClientPage: AddClientPage;

  constructor(page: Page, context: BrowserContext) {
    // Page Setup
    this.page = page;
    this.context = context;

    this.loginPage = new LoginPage(page, context);
    this.landingPage = new LandingPage(page, context);
    this.documentPage = new DocumentsPage(page, context);
    this.newInvoicePage = new NewInvoicePage(page, context);
    this.planPage = new PlanPage(page, context);
    this.clientsPage = new ClientsPage(page, context);
    this.addClientPage = new AddClientPage(page, context);
  }
}
