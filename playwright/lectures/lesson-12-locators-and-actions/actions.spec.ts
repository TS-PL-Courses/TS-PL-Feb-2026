import { test } from '@playwright/test';
import path from 'path';

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

  // Keyboard input:
  // Hit Enter:
  await page.locator('#loginsubmit').press('Enter');
  // Key Combination:
  await page.locator('#loginusername').press('Shift+A');
  await page.locator('#loginusername').press('Control+ArrowUp');
  // special symbol:
  await page.locator('#loginusername').press('$');

  // Hover over element
  // await page.locator('#newpass2').hover();
  await page.locator('#loginusername').fill('karamfilovs@gmail.com');
  await page.locator('#loginpassword').fill('111111');
  await page.locator('#loginsubmit').click();
  // await page.getByText('Към списък фактури').hover();

  // Scrolling:
  // Scrools automatically so that button is visible
  await page.getByRole('link', { name: 'Контакти' }).hover();
  // Scroll so the footer comes into view
  await page.getByRole('link', { name: 'Контакти' }).scrollIntoViewIfNeeded();

  // Upload File:
  await page.getByRole('link', { name: 'Документи' }).click();
  await page.locator('.newbtn.selenium-new-doc').click();

  // select one file
  await page
    .locator('.selenium-file-input')
    .setInputFiles(path.join(__dirname, 'xpath.css.dom.cheat.sheet.pdf'));

  // select multiple files
  await page
    .locator('.selenium-file-input')
    .setInputFiles([
      path.join(__dirname, 'xpath.css.dom.cheat.sheet.pdf'),
      path.join(__dirname, 'actions.spec.ts'),
    ]);

  // select a directory
  await page
    .locator('.selenium-file-input')
    .setInputFiles(path.join(__dirname, '..', 'lesson-12-locators-and-actions'));

  // remove all the selected file
  await page.locator('.selenium-file-input').setInputFiles([]);

  // Upload buffer from memory
  await page.getByLabel('Upload Files').setInputFiles({
    name: 'file.txt',
    mimeType: 'text/plain',
    buffer: Buffer.from('this is test'),
  });
});
