import PageFactory from '@tests/pages/Page.factory';
import { test, expect, Page, BrowserContext } from '@playwright/test';

export default class ClientsSteps extends PageFactory {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  async openClientsPage() {
    await test.step('Open Clients page', async () => {
      await this.page.goto(this.clientsPage.URL);
    });
  }

  async verifyClientsPage() {
    await test.step('Verify Clients page', async () => {
      await expect(this.page, 'Verify Clients page title').toHaveTitle(this.clientsPage.TITLE);
    });
  }

  async clickNewClientButton() {
    await test.step('Click New Client button', async () => {
      await this.clientsPage.NEW_CLIENT_BUTTON.click();

      await expect(this.page, 'Verify New Client page title').toHaveTitle(
        this.clientsPage.CREATE_CLIENT_TITLE,
      );
    });
  }

  async createClient(clientName: string) {
    await test.step('Create Client', async () => {
      await this.clientsPage.CLIENT_NAME_INPUT.fill(clientName);

      await this.clientsPage.SAVE_BUTTON.click();

      await expect(this.clientsPage.MESSAGE_BOX, 'Verify create client success message').toHaveText(
        this.clientsPage.CREATE_SUCCESS_MESSAGE,
      );
    });
  }

  async openClientsList() {
    await test.step('Open Clients list', async () => {
      await this.clientsPage.CLIENTS_LIST_LINK.click();

      await expect(this.page, 'Verify Clients page title').toHaveTitle(this.clientsPage.TITLE);
    });
  }

  async deleteClient(clientName: string) {
    await test.step('Delete Client', async () => {
      await this.clientsPage.CLIENT_CHECKBOX(clientName).check();

      await this.clientsPage.DELETE_CLIENT_BUTTON.click();

      await this.clientsPage.ACCEPT_DELETE_BUTTON.click();

      await expect(this.clientsPage.MESSAGE_BOX, 'Verify delete client success message').toHaveText(
        this.clientsPage.DELETE_SUCCESS_MESSAGE,
      );
    });
  }
}
