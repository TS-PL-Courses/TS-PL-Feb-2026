import { test } from '@tests/steps/fixtures';
import { Credentials } from '@lib/resourses/enums/Credentials';
import { faker } from '@faker-js/faker';
import { PlanDetails } from '@tests/steps/Plans.steps';

const plans: PlanDetails[] = [
  {
    name: 'Корпоративен',
    costLev: 'по договаряне',
    costEuro: 'за интегриране при вас',
    benefits: ['неограничени', 'клиенти', 'фактури', 'служители'],
    otherBenefits: ['REST API за достъп', 'допълнително архивиране', 'приоритетен support'],
  },
  {
    name: 'Бизнес',
    costLev: '54.76 лв./месец',
    costEuro: '28 €/месец',
    benefits: ['1000 клиента', '1000 фактури/месец', '25 служителя'],
    otherBenefits: ['с Ваше лого', 'с електронен подпис'],
  },
  {
    name: 'Малък бизнес',
    costLev: '15.65 лв./месец',
    costEuro: '8 €/месец',
    benefits: ['150 клиента', '150 фактури/месец', '10 служителя'],
    otherBenefits: ['с Ваше лого', 'с електронен подпис'],
  },
  {
    name: 'Персонален',
    costLev: '7.82 лв./месец',
    costEuro: '4 €/месец',
    benefits: ['15 клиента', '15 фактури/месец', '1 служителя'],
    otherBenefits: ['с Ваше лого'],
  },
  {
    name: 'Безплатен',
    costLev: '0 лв./месец',
    costEuro: '0 €/месец',
    benefits: ['5 клиента', '5 фактури/месец', '1 служителя'],
    otherBenefits: [],
  },
];

test.describe('Homework 07', () => {
  test('Scenario 1 - Verify business plans', async ({ sharedSteps, invoicesSteps, plansSteps }) => {
    await sharedSteps.navigateToSite('https://st2016.inv.bg/login/');

    await sharedSteps.login(Credentials.EMAIL, Credentials.PASSWORD);

    await invoicesSteps.openNewInvoicePage();

    await invoicesSteps.verifyNewInvoicePage();

    await invoicesSteps.clickUpgradePlanLink();

    await plansSteps.verifyPlansPage();

    for (const plan of plans) {
      await plansSteps.verifyPlanDetails(plan);
    }
  });

  test('Scenario 2 - Create and delete client', async ({ sharedSteps, clientsSteps }) => {
    const clientName = `Client ${faker.string.alphanumeric(8)}`;

    await sharedSteps.navigateToSite('https://st2016.inv.bg/login/');

    await sharedSteps.login(Credentials.EMAIL, Credentials.PASSWORD);

    await clientsSteps.openClientsPage();

    await clientsSteps.verifyClientsPage();

    await clientsSteps.clickNewClientButton();

    await clientsSteps.createClient(clientName);

    await clientsSteps.openClientsList();

    await clientsSteps.deleteClient(clientName);
  });
});
