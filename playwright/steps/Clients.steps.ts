import PageFactory from '@tests/pages/Page.factory';
import { test, expect, Page, BrowserContext } from '@playwright/test';

export default class ClientsSteps extends PageFactory {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  async clickNewClient() {
    await test.step('Select new client button', async () => {
      await this.clientsPage.NEW_CLINET.click();
      await expect(this.page, 'Verify page title').toHaveTitle('Добавяне на клиент - QA Ground');
    });
  }

  async createNewClien(firstName) {
    await test.step('Create a new client', async () => {
      await this.clientsPage.CLIENT_NAME_BG.fill(firstName);
      await this.clientsPage.SAVE_BUTTON.click();
      await expect(this.clientsPage.SUCCESS_MESSAGE, 'Verify success message').toBeVisible();
    });
  }

  async goToClientsList() {
    await test.step('Go to the list of client', async () => {
      await this.clientsPage.CLIENTS_LIST.click();
      await expect(this.page, 'Verify page navigation').toHaveTitle('Клиенти - QA Ground');
    });
  }

  async deleteNewClient(firstName) {
    await test.step('Select the new client', async () => {
      await this.clientsPage.NEW_CLIENT_CHECKBOX(firstName).click();

      await this.clientsPage.DELETE_BUTTON.click();
      await this.clientsPage.CONFIRM_DELETE_BUTTON.click();

      await expect(
        this.clientsPage.DELETE_SUCCESS_MESSAGE,
        'Verify delete success message',
      ).toBeVisible();
    });
  }
}
