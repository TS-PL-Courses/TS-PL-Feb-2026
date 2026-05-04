import PageFactory from '@tests/pages/Page.factory';
import { test, expect, Page, BrowserContext } from '@playwright/test';
import { faker } from '@faker-js/faker';

export default class AddClientSteps extends PageFactory {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  async fillClientName() {
    const clientName = faker.person.fullName();

    await test.step('Fill Client Name', async () => {
      await this.addClientPage.CLIENT_NAME.fill(clientName);
    });

    return clientName;
  }
  
  async clickSaveButton() {
    await test.step('Click "Save button"', async () => {
      await this.addClientPage.SAVE_BUTTON.click();

      await expect(
        this.addClientPage.CLIENT_MESSAGE_BOX,
        'Verify Create Client Success Message',
      ).toHaveText(this.addClientPage.ADD_CLIENT_SUCCESS_MESSAGE);
    });
  }

  async navigateToClientsList() {
    await test.step('Navigate to the Clients List', async () => {
      await this.addClientPage.CLIENTS_LIST.click();
      await expect(this.page, 'Verify navigation to Clients List').toHaveURL(
        'https://st2016.inv.bg/clients/manage',
      );
    });
  }

  async deleteClient(clientName: string) {
    await test.step(`Delete Client "${clientName}`, async () => {
      const row = this.addClientPage.CLIENT_ROW(clientName);

      await expect(row, `Client "${clientName}" sohuld be visible`).toBeVisible();

      await this.addClientPage.CLIENT_CHECKBOX(clientName).check();

      // Delete action triggers pop up box, so we handle it with auto accept in advance:
      await this.addClientPage.DELETE_CLIENT_BUTTON.click();
      await this.addClientPage.POP_UP_DELETE_BUTTON.click();

      await expect(
        this.addClientPage.CLIENT_MESSAGE_BOX,
        `Client "${clientName}" shoul be deleted successfully`,
      ).toHaveText(this.addClientPage.DELETE_CLIENT_SUCCESS_MESSAGE);

      await expect(
        this.addClientPage.CLIENT_ROW(clientName),
        `Client "${clientName}" should NOT exist after deletion`,
      ).toHaveCount(0);
    });
  }
}
