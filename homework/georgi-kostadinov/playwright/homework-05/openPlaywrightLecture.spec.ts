import { expect, test } from '@playwright/test';

test('open playwright lecture 11', async ({ page }) => {
  await page.goto('https://pragmatic.bg/');

  await expect(page).toHaveURL('https://pragmatic.bg/');
  await expect(page).toHaveTitle(
    'Pragmatic LLC – Курсове по Програмиране, C#, QA(Тестване), ASP.NET, Java, PHP, Бази Данни',
  );
  await expect(page.getByRole('link', { name: 'Курсове' })).toBeVisible();

  await page.getByRole('link', { name: 'Курсове' }).hover();

  await expect(
    page
      .locator('#menu-item-9220')
      .getByRole('link', { name: 'Автоматизирано Тестване с Playwright и TypeScript' }),
  ).toBeVisible();

  await page
    .locator('#menu-item-9220')
    .getByRole('link', { name: 'Автоматизирано Тестване с Playwright и TypeScript' })
    .click();

  await expect(page).toHaveURL(
    'https://pragmatic.bg/courses/automated-testing-with-typescript-and-playwright-course/',
  );
  await expect(
    page.getByRole('heading', { name: 'Автоматизирано Тестване с Playwright и TypeScript' }),
  ).toBeVisible();

  await page.getByTitle('Въведение в Playwright').click();

  await expect(page).toHaveURL(/lessons/);

  await expect(page.getByRole('heading', { name: 'Въведение в Playwright' })).toBeVisible();
});
