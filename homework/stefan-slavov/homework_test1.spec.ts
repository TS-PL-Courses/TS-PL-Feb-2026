import { test, expect } from '@playwright/test';

test('test recording', async ({ page }) => {
  await page.goto(
    'https://id.abv.bg/oauth2/authorize?response_type=code&client_id=home&scope=openid%20profile%20read%20write&state=MXI6cqTqGZq81AKgowPrhR82PS_0wkGMmq9OKhqdRiM%3D&redirect_uri=https://home.abv.bg/login/oauth2/code/home&nonce=2IDXHyzuAZzo95dXM2F5hxQSQMtbB7r_Xb4LTSrJDwQ&code_challenge=7uB9zzxK2wg8IJKxFfk9pxKbTFqytQydhiRfP9VWOr0&code_challenge_method=S256&ts=1776427491',
  );
  await page.getByRole('button', { name: 'Давам съгласие' }).click();

  await page.locator('#username').click();
  await page.locator('#username').fill('moqtemail');

  await page.getByRole('textbox', { name: 'Покажи паролата' }).click();
  await page.getByRole('textbox', { name: 'Покажи паролата' }).fill('moqtaparola');

  await page.getByRole('button', { name: 'Вход' }).click();
  await page.getByText('Грешен потребител / парола').click();

  expect(await page.getByText('Грешен потребител / парола')).toBeVisible();

  await page.close();
});
