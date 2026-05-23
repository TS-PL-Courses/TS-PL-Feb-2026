import { Page, BrowserContext, Locator } from '@playwright/test';
import BasePage from '@tests/pages/Base.page';

export default class ClientsPage extends BasePage {

  public readonly DELETE_CLIENT_BUTTON: Locator;
  public readonly ADD_SUCCESS_MESSAGE: Locator;
  public readonly DELETE_SUCCESS_MESSAGE: Locator;
  

  constructor(page: Page, context: BrowserContext) {
    super(page, context);

    this.URL = 'https://st2016.inv.bg/clients/manage/view/1968#';
    
   // this.TITLE = 'Профил: $'name' - QA Ground';
    
    this.DELETE_CLIENT_BUTTON = this.page.getByRole('button', { name: 'Изтрий клиент' });
    this.ADD_SUCCESS_MESSAGE = this.page.getByText('Клиентът е добавен успешно.', { exact: true });
    this.DELETE_SUCCESS_MESSAGE = this.page.getByText('Клиентът беше изтрит успешно.', { exact: true });
  }
}