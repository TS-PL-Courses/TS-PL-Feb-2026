// use the code gen tool in VScode Testing tab to generate the following scenario:

// go to https://pragmatic.bg/
// hover on "Курсове"
// click on "Автоматизирано Тестване с Playwright и TypeScript"
// click the title of lecture 11 (its a link)

// afterwords you will have a new file in project/tests folder.
// Move it to your homework folder and rename the file and scenario inside to something meaningfull
// you can execute the new scenario "*.spec.ts" file by scenario name with this command: `npx playwright test -g "Scenario Name"` by changing "Scenario Name" to your scenario's name

// bonus: you can add some assertions to check page titles after each navigation (see lecture 11 example of this assertion)

// Good luck and happy hacking!

import { test, expect } from '@playwright/test';

test('Navigate to "Автоматизирано Тестване с Playwright и TypeScript" course and click the title of Lecture 11', async ({
  page,
}) => {
  //Step 1: Go to https://www.pragmatic.bg
  await page.goto('https://pragmatic.bg/');

  //Assert the page has correct Title
  await expect(page).toHaveTitle(
    'Pragmatic LLC – Курсове по Програмиране, C#, QA(Тестване), ASP.NET, Java, PHP, Бази Данни',
  );

  //Step 2: Hover on 'Курсове'
  await page.getByRole('link', { name: 'Курсове', exact: true }).hover();

  //Step 3: Click on "Автоматизирано Тестване с Playwright и TypeScript" course
  await page
    .locator('#menu-item-9220')
    .getByRole('link', { name: 'Автоматизирано Тестване с Playwright и TypeScript' })
    .click();

  //Assert the course page has correct Title
  await expect(page).toHaveTitle(
    'Автоматизирано Тестване с Playwright и TypeScript – Pragmatic LLC',
  );

  //Step 4: Click the title of Lecture 11
  await page.getByRole('link', { name: 'Въведение в Playwright' }).click();

  //Assert the Lecture 11 page has correct Title
  await expect(page).toHaveTitle('Въведение в Playwright – Pragmatic LLC');
});
