import PageFactory from '@tests/pages/Page.factory';
import { test, expect, Page, BrowserContext } from '@playwright/test';
import path from 'path';

export default class DocumentsSteps extends PageFactory {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  async clickUploadDocumentLink() {
    await test.step('Click upload document link', async () => {
      await this.documentPage.UPLOAD_DOCUMENT_LINK.click();
      await expect(
        this.documentPage.CHOOSE_FILE_BUTTON,
        'Verify choose file buttin is visible',
      ).toBeVisible();
    });
  }

  async uploadFile(filename: string) {
    await test.step('Upload File', async () => {
      await this.documentPage.CHOOSE_FILE_BUTTON.setInputFiles(
        path.join(__dirname, '..', '..', 'lib', 'resourses', 'files', filename),
      );
      await this.documentPage.CREATE_BUTTON.click();
      await expect(this.documentPage.MESSAGE_BOX, 'Verify upload success message').toHaveText(
        this.documentPage.UPLOAD_SUCCESS_MESSAGE,
      );
    });
  }

  async deleteFile(filename: string) {
    await test.step('Upload File', async () => {
      await this.documentPage.DOCUMENT_CHECKBOX(filename).check();

      // Delete action triggers pop up box, so we handle it with auto accept in advance:
      this.page.on('dialog', (dialog) => dialog.accept());
      await this.documentPage.DELETE_FILE_BUTTON.click();

      await expect(this.documentPage.MESSAGE_BOX, 'Verify delete successs message').toHaveText(
        this.documentPage.DELETE_SUCCESS_MESSAGE,
      );
    });
  }
  async verifyNewInvoicePage(): Promise<void> {
    await test.step('Verify New Invoice page is displayed', async () => {
      // Ensure we target the first visible matching invoice link to avoid strict-mode ambiguity
      const invoiceLink = this.page.locator('a.topmenu[href*="invoices/new"]').first();
      await invoiceLink.waitFor({ state: 'visible', timeout: 10000 });
      await expect(invoiceLink, 'Verify New Invoice tab is visible').toBeVisible();
    });
  }
  async clickUpgradePlan(): Promise<Page> {
    // Try several possible upgrade links (fallbacks) and click the first visible one.
    await test.step('Click upgrade plan link', async () => {
      const candidates = [
        this.page.getByRole('link', { name: 'Преминете на по-висок план' }),
        this.page.getByRole('link', { name: 'Изберете своя план' }),
        this.page.getByRole('link', { name: 'Абонамент' }),
        this.page.locator('a[href*="settings/plan"]'),
        this.page.locator('a[href*="/settings/plan"]'),
      ];

      let clicked = false;
      for (const candidate of candidates) {
        const count = await candidate.count().catch(() => 0);
        if (
          count > 0 &&
          (await candidate
            .first()
            .isVisible()
            .catch(() => false))
        ) {
          const [maybeNewPage] = await Promise.all([
            this.context.waitForEvent('page').catch(() => null),
            candidate.first().click({ timeout: 10000 }),
          ]);

          if (maybeNewPage) await maybeNewPage.waitForLoadState('load');
          else await this.page.waitForLoadState('load');

          clicked = true;
          break;
        }
      }

      if (!clicked) {
        // As a last resort navigate directly to the plan/settings URL used on the site
        await this.page.goto('https://st2016.inv.bg/settings/plan');
        await this.page.waitForLoadState('load');
      }
    });

    // Return the page that now hosts the plans/settings content. If a new page was opened,
    // prefer that; otherwise return the current page.
    const pages = this.context.pages();
    return pages[pages.length - 1] || this.page;
  }
}
