import { Page, BrowserContext, Locator } from '@playwright/test';
import BasePage from '@tests/pages/Base.page';

export default class ClientsPage extends BasePage {
  public readonly NEW_CLIENT_LINK: Locator;
  public readonly CLIENTS_LINK: Locator;
  public readonly CLIENT_NAME_INPUT: Locator;
  public readonly SAVE_BUTTON: Locator;
  public readonly DELETE_CLIENT_BUTTON: Locator;
  public readonly DELETE_CLIENT_CONFIRM_BUTTON: Locator;

  public readonly CLIENTS_LIST_CHECKBOX: (name: string) => Locator;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);

    this.URL = 'https://st2016.inv.bg/clients/manage';
    this.TITLE = 'Клиенти - QA Ground';

    this.NEW_CLIENT_LINK = this.page.getByRole('link', {
      name: 'Нов клиент',
      exact: true,
    });

    this.CLIENT_NAME_INPUT = this.page.getByRole('textbox', { name: 'Име:' });

    this.SAVE_BUTTON = this.page.getByRole('button', { name: 'Запази' });

    this.CLIENTS_LINK = this.page.getByRole('link', { name: 'Списък клиенти' });

    this.CLIENTS_LIST_CHECKBOX = (name: string) =>
      this.page.getByRole('row', { name: name }).getByRole('checkbox');

    this.DELETE_CLIENT_BUTTON = this.page.getByRole('link', { name: 'Изтрий' });
    this.DELETE_CLIENT_CONFIRM_BUTTON = this.page.getByRole('button', { name: 'Изтрий' });
  }
}
