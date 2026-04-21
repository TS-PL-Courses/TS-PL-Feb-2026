import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://pragmatic.bg/');
  await expect(page).toHaveTitle(/Курсове/);
  await page.locator('#menu-item-6972').hover();
  await page.locator('#menu-item-9220').click();
  await expect(page).toHaveTitle(/Playwright/);
  await page.getByRole('link', { name: 'Въведение в Playwright' }).click();
  await expect(page).toHaveTitle(/Въведение/);
});
