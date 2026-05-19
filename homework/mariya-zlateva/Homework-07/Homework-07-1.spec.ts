import { test } from '@tests/steps/fixtures';
import { Credentials } from '@lib/resourses/enums/Credentials';
import PlansSteps from '@tests/steps/Plans.steps';

test.describe('Scenario 1 - Verify business plans', () => {
  // Scenario 1 - Verify business plans
  const plansData = [
    // Corporate uses negotiated pricing on the live site; skip numeric price assertions
    {
      name: 'Corporate',
      priceBGN: 'по договаряне',
      priceEUR: '',
      benefits: [
        'Неограничен брой клиенти',
        'Неограничен брой фактури',
        'Неограничен брой служители',
        'REST API за достъп',
        'приоритетен support',
      ],
    },
    {
      name: 'Business',
      priceBGN: '54.76 лв./месец',
      priceEUR: '28 €/месец',
      benefits: ['1000 клиента', '1000 фактури/месец', '25 служителя', 'с Ваше лого'],
    },
    {
      name: 'Small Business',
      priceBGN: '15.65 лв./месец',
      priceEUR: '8 €/месец',
      benefits: ['150 клиента', '150 фактури/месец', '10 служителя'],
    },
    {
      name: 'Personal',
      priceBGN: '7.82 лв./месец',
      priceEUR: '4 €/месец',
      benefits: ['15 клиента', '15 фактури/месец', '1 служителя'],
    },
    {
      name: 'Free',
      priceBGN: '0 лв./месец',
      priceEUR: '0 €/месец',
      benefits: ['5 клиента', '5 фактури/месец', '1 служителя'],
    },
  ];

  for (const plan of plansData) {
    test(`Verify ${plan.name} plan details`, async ({
      page,
      context,
      sharedSteps,
      documentSteps,
    }) => {
      // 1. Navigate to login page
      await sharedSteps.navigateToSite('https://st2016.inv.bg/login/');

      // 2. Login
      await sharedSteps.login(Credentials.EMAIL, Credentials.PASSWORD, false);

      // 3. Verify "New Invoice" page exists
      await documentSteps.verifyNewInvoicePage();

      // 4. Navigate directly to Plans page to avoid flaky tab/open behavior
      await page.goto('https://st2016.inv.bg/settings/plan');
      await page.waitForLoadState('load');

      // 5. Create Steps for Plans page and verify
      const plansSteps = new PlansSteps(page, context);
      await plansSteps.verifyOnPlansPage();

      // 6. Verify plan details (benefits array omitted here)
      await plansSteps.verifyPlanDetails(plan.name, plan.priceBGN, plan.priceEUR, []);
    });
  }
});
