import { BrowserContext, Locator, Page } from '@playwright/test';
import BasePage from '@tests/pages/Base.page';

export default class ClientsPage extends BasePage {
  public readonly NEW_CLIENT_LINK: Locator;
  public readonly CLIENT_NAME_BG: Locator;
  public readonly SAVE_BUTTON: Locator;
  public readonly SUCCESS_MESSAGE: Locator;
  public readonly CLIENTS_LIST_LINK: Locator;
  public readonly NEW_CLIENT_CHECKBOX: (firstName: string) => Locator;
  public readonly DELETE_BUTTON: Locator;
  public readonly CONFIRM_DELETE_BUTTON: Locator;
  public readonly DELETE_SUCCESS_MESSAGE: Locator;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);

    this.URL = 'https://st2016.inv.bg/clients/manage/';
    this.TITLE = 'Клиенти - QA Ground';

    this.NEW_CLIENT_LINK = this.page.getByRole('link', { name: 'Нов клиент' });
    this.CLIENT_NAME_BG = this.page.locator('#name-bg');
    this.SAVE_BUTTON = this.page.getByRole('button', { name: 'Запази' });
    this.SUCCESS_MESSAGE = this.page.getByText('Клиентът е добавен успешно.', { exact: true });
    this.CLIENTS_LIST_LINK = this.page.getByRole('link', { name: 'Списък клиенти' });
    this.NEW_CLIENT_CHECKBOX = (firstName: string) =>
      this.page.getByRole('row', { name: `${firstName}` }).getByRole('checkbox');
    this.DELETE_BUTTON = this.page.getByRole('link', { name: 'Изтрий' });
    this.CONFIRM_DELETE_BUTTON = this.page.locator('#submit-clients-delete');
    this.DELETE_SUCCESS_MESSAGE = this.page.getByText('Избраните клиенти бяха изтрити успешно.', {
      exact: true,
    });
  }
}
