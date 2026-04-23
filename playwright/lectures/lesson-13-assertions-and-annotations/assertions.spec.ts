import { test, expect } from '@playwright/test';

// original jest library documentation: https://jestjs.io/docs/expect
// playwright documentation: https://playwright.dev/docs/test-assertions

test('Assertions Example', async ({ page }) => {
  await page.goto('https://st2016.inv.bg/');
  // await page.expect

  await page.locator('#loginusername').fill('karamfilovs@gmail.com');
  await page.locator('#loginpassword').fill('111111');
  await page.locator('#loginsubmit').click();
  // await page.expect

  await page.getByRole('link', { name: 'Нова Фактура', exact: true }).click();
  // await page.expect

  // Non Retrying Assertions:
    expect(true).toBeTruthy();
    expect(false).toBeTruthy();
    expect(1).toBe(1);
    expect('success').toBe('success');
    expect('Playwright').toContain('Play');

    // Polling
    await expect.poll(
      async () => {
        return true;
      },
      {
        timeout: 6000,
        intervals: [1500, 3000, 4500, 6000],
      },
    );

  // Auto-retrying (Web-First) assertions:

  // custom time out
    await expect(page.getByRole('heading', { name: 'Нова Фактура' })).toBeVisible({
      timeout: 7 * 1000,
    });

  // element text assertions:
    await expect(page.locator('//*[@id="headline2"]/h2')).toHaveText('Нова фактура'); // complete text
    await expect(page.locator('//*[@id="headline2"]/h2')).toContainText('Нова'); // part of the text
    await expect(page.locator('.universalSearchInputIcon')).toBeEmpty(); // has no text

  // dropdown has value check currently selcted value:
    await page.locator('#invoice-item-2-price_quantity_unit').selectOption('2');
    await expect(page.locator('#invoice-item-2-price_quantity_unit')).toHaveValue('2'); // check single selected values

    await page.locator('#invoice-item-2-price_quantity_unit').selectOption(['2', '4', '89']);
    await expect(page.locator('#invoice-item-2-price_quantity_unit')).toHaveValues(['2', '4', '89']); // check multiple selected values

  // check element state:
  await expect(page.locator('#headline2')).toBeVisible();
  await expect(page.locator('#headline3')).toBeHidden();
  await expect(page.locator('#invoice-item-2-price_quantity_unit')).toBeEnabled();
  await expect(page.locator('#inv_number')).toBeDisabled();
  await expect(page.locator('#client_firmname')).toBeEditable();
  await expect(page.locator('#is_person')).not.toBeChecked();
  await expect(page.locator('#client_firmname')).not.toBeFocused();

  // Negative match (.not):
  expect(1).not.toEqual(0);
  await expect(page.locator('//*[@id="headline2"]/h2')).not.toHaveText('wrong text');

  // element atribute assertions:
  await expect(page.getByRole('button', { name: 'Създай фактурата' })).toHaveId('act_create');
  await expect(page.getByRole('button', { name: 'Създай фактурата' })).toHaveClass(
    'invform_submit_btn btn_green selenium-submit-invoice',
  );
  await expect(page.getByRole('button', { name: 'Създай фактурата' })).toHaveCSS(
    'color',
    'rgb(255, 255, 255)',
  );
  await expect(page.getByRole('button', { name: 'Създай фактурата' })).toHaveCSS('color', '#fff');

  await expect(page.getByRole('button', { name: 'Създай фактурата' })).toHaveAttribute(
    'data-additional-text',
    'и пренеси плащанията',
  );

  // Soft Assertions:
  // Make multiple check that will not stop the test when failed...
  await expect.soft(page.locator('//*[@id="headline2"]/h2')).not.toHaveText('wrong text');
  await expect.soft(page.locator('#is_person')).not.toBeChecked();
  await expect.soft(page.locator('#client_firmname')).not.toBeFocused();
  // ... and continue the test to check more things
  await expect(page.getByRole('button', { name: 'Създай фактурата' })).toBeVisible();

  // custom expect messages
  expect(24, 'Evaluate if numbers are equal').toEqual(24);
  await expect(
    page.getByRole('button', { name: 'Създай фактурата' }),
    'Verify "Create Invoice" button is visible.',
  ).toBeVisible();
});
