import { Page, BrowserContext, Locator } from '@playwright/test';
import BasePage from '@tests/pages/Base.page';

export default class NewClientPage extends BasePage {

  public readonly SAVE_BUTTON: Locator;
  public readonly HEADER: Locator;
  public readonly CLIENT_NAME_INPUT: Locator;
  
  

  constructor(page: Page, context: BrowserContext) {
    super(page, context);

    this.URL = 'https://st2016.inv.bg/clients/manage/add';
    this.TITLE = 'Добавяне на клиент - QA Ground';
    
  
    this.HEADER = this.page.locator('h2:has-text("Нов клиент")');
    this.SAVE_BUTTON = this.page.getByRole('button', { name: 'Запази' });
    this.CLIENT_NAME_INPUT = this.page.getByLabel('Име:');
  }
}