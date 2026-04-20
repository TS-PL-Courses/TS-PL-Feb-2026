import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://pragmatic.bg/');
  await expect(page).toHaveTitle(
    'Pragmatic LLC – Курсове по Програмиране, C#, QA(Тестване), ASP.NET, Java, PHP, Бази Данни',
  );
  await page.getByRole('link', { name: 'Курсове', exact: true }).hover();
  await page
    .locator('#menu-item-9220')
    .getByRole('link', { name: 'Автоматизирано Тестване с Playwright и TypeScript', exact: true })
    .click();
  await expect(page).toHaveTitle(
    'Автоматизирано Тестване с Playwright и TypeScript – Pragmatic LLC',
  );
  await page.getByRole('link', { name: 'Въведение в Playwright', exact: true }).click();
  await expect(page).toHaveTitle('Въведение в Playwright – Pragmatic LLC');
});
