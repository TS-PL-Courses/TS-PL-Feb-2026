import PageFactory from '@tests/pages/Page.factory';
import { test, expect, Page, BrowserContext } from '@playwright/test';

export default class ClientsSteps extends PageFactory {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  async clickNewClientButton() {
    await test.step('Navigate to Create new Client Page by click the New Client button', async () => {
      await this.clientsPage.NEW_CLIENT_BUTTON.click();
      await expect(this.page, 'Verify page title').toHaveTitle('Добавяне на клиент - QA Ground');
    });
  }
}
