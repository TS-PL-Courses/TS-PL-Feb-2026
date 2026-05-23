import PageFactory from '@tests/pages/Page.factory';
import { test, expect, Page, BrowserContext } from '@playwright/test';

export default class ClientsSteps extends PageFactory {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

    async navigateToNewClientPage() {
    await test.step('Navigate to Add Client Page', async () => {
      await this.clientsPage.NEW_CLIENT_BUTTON.click();
      await expect(this.page, 'Verify page title').toHaveTitle('Добавяне на клиент - QA Ground');
    });
  }

    async verifyClientAdded() {
    await test.step('Verify Client added', async () => {
      await expect(this.clientsPage.SUCCESS_MESSAGE).toBeVisible();
      await expect(this.clientsPage.SUCCESS_MESSAGE).toHaveText('Клиентът е добавен успешно');
    });
    }
}