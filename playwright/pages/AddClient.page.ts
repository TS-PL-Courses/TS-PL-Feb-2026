import { Page, BrowserContext, Locator } from '@playwright/test';
import BasePage from '@tests/pages/Base.page';

export default class AddClientPage extends BasePage {
  public readonly CLIENT_NAME: Locator;
  public readonly SAVE_BUTTON: Locator;
  public readonly CLIENT_MESSAGE_BOX: Locator;
  public readonly ADD_CLIENT_SUCCESS_MESSAGE: string;
  public readonly DELETE_CLIENT_SUCCESS_MESSAGE: string;
  public readonly CLIENTS_LIST: Locator;
  public readonly CLIENT_ROW: (clientName: string) => Locator;
  public readonly CLIENT_CHECKBOX: (name: string) => Locator;
  public readonly DELETE_CLIENT_BUTTON: Locator;
  public readonly POP_UP_DELETE_BUTTON: Locator;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);

    this.URL = 'https://st2016.inv.bg/clients/manage/';
    this.TITLE = 'https://st2016.inv.bg/clients/manage/add';

    /* Locators: */
    this.CLIENT_NAME = this.page.locator('#name-bg');
    this.SAVE_BUTTON = this.page.getByRole('button', { name: 'Запази' });
    this.CLIENT_MESSAGE_BOX = this.page.locator('#okmsg');
    this.ADD_CLIENT_SUCCESS_MESSAGE = 'Клиентът е добавен успешно.';
    this.DELETE_CLIENT_SUCCESS_MESSAGE = 'Избраните клиенти бяха изтрити успешно.';
    this.CLIENTS_LIST = this.page.getByRole('link', { name: 'Списък клиенти' });
    this.CLIENT_ROW = (clientName: string) =>
      this.page.locator('tr').filter({
        has: this.page.locator('a.selenium-client-link', { hasText: clientName }),
      });
    this.CLIENT_CHECKBOX = (name: string) =>
      this.page
        .getByRole('row', {
          name: name,
        })
        .getByRole('checkbox');
    this.DELETE_CLIENT_BUTTON = this.page.getByRole('link', { name: 'Изтрий' });
    this.POP_UP_DELETE_BUTTON = this.page.locator('#submit-clients-delete');
  }
}
