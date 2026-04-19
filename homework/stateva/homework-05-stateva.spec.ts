import { test, expect } from '@playwright/test';

test('Navigate to Playwright course and open Lecture 11', async ({ page }) => {
  // Step 1: Go to https://pragmatic.bg/
  await page.goto('https://pragmatic.bg/');

  // Step 2: Hover on "Курсове"
  await page.getByRole('link', { name: 'Курсове', exact: true }).hover();

  // Step 3: Click on "Автоматизирано Тестване с Playwright и TypeScript"
  await page
    .locator('#menu-item-9220')
    .getByRole('link', { name: 'Автоматизирано Тестване с Playwright и TypeScript' })
    .click();

  // Step 4: Click the title of lecture 11 ("Въведение в Playwright")
  await page.getByRole('link', { name: 'Въведение в Playwright' }).click();

  // (Assertion) Verify lecture page is opened
  await expect(page.getByRole('heading', { name: 'Въведение в Playwright' })).toBeVisible();
});
