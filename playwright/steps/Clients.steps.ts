import PageFactory from '@tests/pages/Page.factory';
import { test, expect, Page, BrowserContext } from '@playwright/test';

export default class ClientsSteps extends PageFactory {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  async navigateToNewClientPage() {
    await test.step('Navigate To New Client Page', async () => {
      await this.clientsPage.NEW_CLIENT_LINK.click();
      await expect(this.page, 'Verify page title').toHaveTitle('Добавяне на клиент - QA Ground');
    });
  }

  async inputClientName(name: string) {
    await test.step('Input Client Name', async () => {
      await this.clientsPage.CLIENT_NAME_INPUT.fill(name);
    });
  }

  async clickSaveButton() {
    await test.step('Click Save Button', async () => {
      await this.clientsPage.SAVE_BUTTON.click();
      await expect(this.page.getByText('Клиентът е добавен успешно')).toBeVisible();
    });
  }

  async navigateToClientsPage() {
    await test.step('Navigate To Clients Page', async () => {
      await this.clientsPage.CLIENTS_LINK.click();
      await expect(this.page, 'Verify page title').toHaveTitle(this.clientsPage.TITLE);
    });
  }

  async checkDeleteClientButton(name: string) {
    await test.step('Click Delete Client Button', async () => {
      await this.clientsPage.CLIENTS_LIST_CHECKBOX(name).check();
      await expect(this.clientsPage.CLIENTS_LIST_CHECKBOX(name)).toBeChecked();
    });
  }

  async clickDeleteClientButton() {
    await test.step('Click Delete Client Button', async () => {
      await this.clientsPage.DELETE_CLIENT_BUTTON.click();
      await expect(this.page.getByText('Внимание')).toBeVisible();
    });
  }

  async clickConfirmDeleteClientButton() {
    await test.step('Click Delete Client Button', async () => {
      await this.clientsPage.DELETE_CLIENT_CONFIRM_BUTTON.click();
      await expect(this.page.getByText('Избраните клиенти бяха изтрити успешно.')).toBeVisible();
    });
  }
}
