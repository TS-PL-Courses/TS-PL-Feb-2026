import PageFactory from '@tests/pages/Page.factory';
import { test, expect, Page, BrowserContext } from '@playwright/test';
import { faker } from '@faker-js/faker';

export default class NewClientSteps extends PageFactory {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  async addNewClient() {
    await test.step('Create new Client', async () => {
      await this.newClientPage.CLIENT_NAME_INPUT.fill(faker.person.fullName());
      await this.newClientPage.SAVE_BUTTON.click();
      await expect(this.page, 'Verify page title').toHaveTitle(this.newClientPage.TITLE);

    // await expect(this.page, 'Verify page title').toHaveTitle((title) => title.includes('Профил') && title.includes('QA Ground'));

    //this.TITLE.includes('Профил') && this.TITLE.includes('QA Ground');
    });
  }


}