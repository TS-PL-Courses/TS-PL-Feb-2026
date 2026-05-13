import { Page, BrowserContext, Locator } from '@playwright/test';
import BasePage from '@tests/pages/Base.page';

export default class ClientsPage extends BasePage {
  public readonly CREATE_CLIENT_TITLE: string;
  public readonly CREATE_SUCCESS_MESSAGE: string;
  public readonly DELETE_SUCCESS_MESSAGE: string;

  public readonly NEW_CLIENT_BUTTON: Locator;
  public readonly CLIENT_NAME_INPUT: Locator;
  public readonly SAVE_BUTTON: Locator;
  public readonly MESSAGE_BOX: Locator;
  public readonly CLIENTS_LIST_LINK: Locator;
  public readonly CLIENT_CHECKBOX: (clientName: string) => Locator;
  public readonly DELETE_CLIENT_BUTTON: Locator;
  public readonly ACCEPT_DELETE_BUTTON: Locator;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);

    this.URL = 'https://st2016.inv.bg/clients';
    this.TITLE = 'Клиенти - QA Ground';

    this.CREATE_CLIENT_TITLE = 'Добавяне на клиент - QA Ground';

    this.CREATE_SUCCESS_MESSAGE = 'Клиентът е добавен успешно.';
    this.DELETE_SUCCESS_MESSAGE = 'Избраните клиенти бяха изтрити успешно.';

    this.NEW_CLIENT_BUTTON = this.page.getByRole('link', { name: 'Нов Клиент' });
    this.CLIENT_NAME_INPUT = this.page.locator('#name-bg');
    this.SAVE_BUTTON = this.page.getByRole('button', { name: 'Запази' });
    this.MESSAGE_BOX = this.page.locator('#okmsg');
    this.CLIENTS_LIST_LINK = this.page.getByRole('link', { name: 'Списък клиенти' });

    this.CLIENT_CHECKBOX = (clientName: string) =>
      this.page.getByRole('row', { name: clientName }).getByRole('checkbox');

    this.DELETE_CLIENT_BUTTON = this.page.getByRole('link', { name: 'Изтрий' });
    this.ACCEPT_DELETE_BUTTON = this.page.getByRole('button', { name: 'Изтрий' });
  }
}
