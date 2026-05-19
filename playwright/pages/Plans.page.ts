import { Page, BrowserContext, Locator } from '@playwright/test';
import BasePage from './Base.page';

export default class PlansPage extends BasePage {
  // ===== Page identification =====
  public readonly PAGE_IDENTIFIER: Locator;

  // ===== Dynamic locators =====
  public readonly PLAN_CARD: (planName: string) => Locator;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);

    // Optional metadata (не се използва за assert)
    this.URL = '';
    this.TITLE = 'Ценови планове';

    // Identifier that proves we are on Plans page.
    // The live site doesn't show a single fixed title, so match any known plan heading.
    // pick the first matching heading to avoid strict-mode ambiguity
    this.PAGE_IDENTIFIER = this.page
      .getByRole('heading', { name: /Корпоративен|Бизнес|Малък бизнес|Персонален|Безплатен/ })
      .first();

    // Dynamic arrow method locator (изискване по условие)
    const translations: Record<string, string> = {
      Corporate: 'Корпоративен',
      Business: 'Бизнес',
      'Small Business': 'Малък бизнес',
      Personal: 'Персонален',
      Free: 'Безплатен',
    };

    this.PLAN_CARD = (planName: string) => {
      const bg = translations[planName] || '';
      const pattern = bg ? new RegExp(`${planName}|${bg}`) : new RegExp(planName);
      // Use the heading element for the plan name; it's present in the live DOM
      return this.page.getByRole('heading', { name: pattern }).first();
    };
  }
}
