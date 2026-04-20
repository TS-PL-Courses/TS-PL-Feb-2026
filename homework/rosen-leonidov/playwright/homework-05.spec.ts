import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // go to https://pragmatic.bg/
  await page.goto('https://pragmatic.bg/');

  // hover on "Курсове"
  await page.getByRole('link', { name: 'Курсове', exact: true }).hover();

  // click on "Автоматизирано Тестване с Playwright и TypeScript"
  await page
    .locator('#menu-item-9220')
    .getByRole('link', { name: 'Автоматизирано Тестване с' })
    .click();

  // click the title of lecture 11 (its a link)
  await page.getByRole('link', { name: 'Въведение в Playwright' }).click();

  // bonus: you can add some assertions to check page titles after each navigation (see lecture 11 example of this assertion)
  await expect(page.getByRole('heading', { name: 'Въведение в Playwright' })).toBeVisible();
});
