import { test, expect } from '@playwright/test';

test('Scenario Name', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(
    'Fast and reliable end-to-end testing for modern web apps | Playwrigh',
  );

  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page).toHaveTitle('Installation | Playwright');
});
