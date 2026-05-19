import { Page, BrowserContext, Locator } from '@playwright/test';
import BasePage from './Base.page';

export default class ClientsPage extends BasePage {
  // ===== Page identification =====
  public readonly PAGE_IDENTIFIER: Locator;
  public readonly NEW_CLIENT_PAGE_IDENTIFIER: Locator;
  public readonly CLIENT_LIST_PAGE_IDENTIFIER: Locator;

  // ===== Locators =====
  public readonly NEW_CLIENT_BUTTON: Locator;
  public readonly CLIENT_NAME_INPUT: Locator;
  public readonly SAVE_BUTTON: Locator;
  public readonly CLIENT_LIST_LINK: Locator;
  public readonly DELETE_BUTTON: Locator;
  public readonly SUCCESS_MESSAGE: Locator;

  // ===== Dynamic locators =====
  public readonly CLIENT_CHECKBOX: (clientName: string) => Locator;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);

    this.URL = '';
    this.TITLE = 'Клиенти';

    // Page identifiers
    this.PAGE_IDENTIFIER = this.page.getByRole('heading', { name: /Клиенти/i });
    this.NEW_CLIENT_PAGE_IDENTIFIER = this.page.getByRole('heading', { name: /Нов Клиент/i });
    this.CLIENT_LIST_PAGE_IDENTIFIER = this.page.getByRole('heading', {
      name: /Списък с Клиенти/i,
    });

    // Buttons and inputs
    // The "New client" control may be a button or a link depending on the site; match either
    this.NEW_CLIENT_BUTTON = this.page
      .locator(
        'button:has-text("Нов клиент"), a:has-text("Нов клиент"), button:has-text("Нов Клиент"), a:has-text("Нов Клиент")',
      )
      .first();
    this.CLIENT_NAME_INPUT = this.page.locator('input[name="name"]').first();
    this.SAVE_BUTTON = this.page.getByRole('button', { name: /Запази/i });
    this.CLIENT_LIST_LINK = this.page.getByRole('link', {
      name: /Списък с Клиенти|Списък клиенти/i,
    });
    this.DELETE_BUTTON = this.page.getByRole('button', { name: /Изтрий|Изтрии|Delete/i });
    this.SUCCESS_MESSAGE = this.page.locator('[class*="success"], [class*="alert-success"]');

    // Dynamic arrow method locator for client checkbox
    this.CLIENT_CHECKBOX = (clientName: string) =>
      this.page.locator(`tr:has-text("${clientName}") input[type="checkbox"]`);
  }
}
