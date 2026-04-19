import { test } from '@playwright/test';

// documentation: https://playwright.dev/docs/input

test('Actions Examples', async ({ page }) => {
  await page.goto('https://st2016.inv.bg/login');

  // Mouse clicks:
  // Generic click
  await page.locator("[tabindex='3']").click();
  // Double click
  await page.locator('#persistent').dblclick();
  // Right click
  await page.locator('#persistent').click({ button: 'right' });
  // Shift + click
  await page.locator('#loginusername').click({ modifiers: ['Shift'] });
  // Ctr + click
  await page.locator('#loginusername').click({ modifiers: ['ControlOrMeta'] });
  // click at custom spot on screen
  await page.locator('#loginpassword').click({ position: { x: 0, y: 0 } });

  // Text Input
  await page.locator('#loginusername').fill('username');

  // Checkbox and Radio buttons:
  await page.locator('.selenium-language-radio-button-EN').check();
  await page.locator('.selenium-remember-me-checkbox').check();

  // Selecting option from Dropdown
  await page.locator('#searchLanguage').selectOption('Afrikaans'); // select by option text
  await page.locator('#searchLanguage').selectOption('af'); // select by value text
  await page.locator('Choose a color').selectOption({ label: 'Blue' }); // select by label text
  await page.locator('Choose multiple colors').selectOption(['red', 'green', 'blue']); // select multiple options

  // Focus Element
  await page.locator('#newpass2').focus();

  // Drag and Drop
  await page.locator('#newpass2').dragTo(page.locator('#loginusername'));
});
