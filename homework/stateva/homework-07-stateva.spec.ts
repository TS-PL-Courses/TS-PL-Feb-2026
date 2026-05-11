import { test } from '@tests/steps/fixtures';
import { Credentials } from '@lib/resourses/enums/Credentials';
import { faker } from '@faker-js/faker';
// npx playwright test homework-07-stateva.spec.ts --headed
interface PlanData {
  scenario: string;
  planName: string;
  planCost: { lv: string | null; euro: string | null; text: string | null };
  clientNumber: string;
  invoices: string;
  employeesNumber: string;
  features: {
    restApiAccess: string | null;
    additionalBackup: string | null;
    prioritySupport: string | null;
    logo: string | null;
    eSignature: string | null;
  };
}

// Parameterized plan data for the 5 required billing plans.
// Each item maps directly to a separate test case with plan name, costs, limits and feature checks.
const planData: PlanData[] = [
  {
    scenario: 'corporate plan',
    planName: 'Корпоративен',
    planCost: { lv: null, euro: null, text: 'по договаряне' },
    clientNumber: 'неограничени',
    invoices: 'неограничени',
    employeesNumber: 'неограничени',
    features: {
      restApiAccess: 'REST API за достъп',
      additionalBackup: 'допълнително архивиране',
      prioritySupport: 'приоритетен support',
      logo: null,
      eSignature: null,
    },
  },
  {
    scenario: 'business plan',
    planName: 'Бизнес',
    planCost: { lv: '54.76 лв./месец', euro: '28 €/месец', text: null },
    clientNumber: '1000 клиента',
    invoices: '1000 фактури/месец',
    employeesNumber: '25 служителя',
    features: {
      restApiAccess: null,
      additionalBackup: null,
      prioritySupport: null,
      logo: 'с Ваше лого',
      eSignature: 'с електронен подпис',
    },
  },
  {
    scenario: 'small business plan',
    planName: 'Малък бизнес',
    planCost: { lv: '15.65 лв./месец', euro: '8 €/месец', text: null },
    clientNumber: '150 клиента',
    invoices: '150 фактури/месец',
    employeesNumber: '10 служителя',
    features: {
      restApiAccess: null,
      additionalBackup: null,
      prioritySupport: null,
      logo: 'с Ваше лого',
      eSignature: 'с електронен подпис',
    },
  },
  {
    scenario: 'personal plan',
    planName: 'Персонален',
    planCost: { lv: '7.82 лв./месец', euro: '4 €/месец', text: null },
    clientNumber: '15 клиента',
    invoices: '15 фактури/месец',
    employeesNumber: '1 служител',
    features: {
      restApiAccess: null,
      additionalBackup: null,
      prioritySupport: null,
      logo: 'с Ваше лого',
      eSignature: null,
    },
  },
  {
    scenario: 'free plan',
    planName: 'Безплатен',
    planCost: { lv: '0 лв./месец', euro: '0 €/месец', text: null },
    clientNumber: '5 клиента',
    invoices: '5 фактури/месец',
    employeesNumber: '1 служител',
    features: {
      restApiAccess: null,
      additionalBackup: null,
      prioritySupport: null,
      logo: null,
      eSignature: null,
    },
  },
];

planData.forEach(
  ({ scenario, planName, planCost, clientNumber, invoices, employeesNumber, features }) => {
    test(
      `Verify details of ${scenario}`,
      {
        tag: ['@homework-07', '@positive'],
        annotation: [
          { type: 'plan name', description: planName },
          {
            type: 'plan cost',
            description: [planCost.text, planCost.euro, planCost.lv].filter(Boolean).join('|'),
          },
          { type: 'plan client number', description: clientNumber },
          { type: 'plan invoices', description: invoices },
          { type: 'plan employee number', description: employeesNumber },
          {
            type: 'plan features',
            description: [
              features.additionalBackup,
              features.restApiAccess,
              features.prioritySupport,
              features.logo,
              features.eSignature,
            ]
              .filter(Boolean)
              .join('|'),
          },
        ],
      },
      async ({ page, sharedSteps, landingsSteps, newInvoiceSteps }) => {
        // Login using the shared credentials enum instead of hardcoded values.
        await sharedSteps.navigateToSite('https://st2016.inv.bg/login/');
        await sharedSteps.login(Credentials.EMAIL, Credentials.PASSWORD);
        // Required cooldown to avoid backend 429 rate limiting in test environment.
        await page.waitForTimeout(5000);
        // Navigate to the "Нова Фактура" page and then to the higher plan page.
        await landingsSteps.navigateToNewInvoicePage();

        await newInvoiceSteps.navigateToNewPlan();
        await newInvoiceSteps.verifyPlanName(planName);

        // Verify the plan cost details. Some plans use a single text value while others show both Lev and Euro.
        const valuesToCheck = [planCost.lv, planCost.euro, planCost.text].filter(
          Boolean,
        ) as string[];
        for (const value of valuesToCheck) {
          await newInvoiceSteps.verifyPlanCost(value);
        }

        // Verify the plan benefits: client limit, invoice limit and employee allowance.
        await newInvoiceSteps.verifyEmployee(planName, employeesNumber, invoices, clientNumber);

        // Verify special features such as API access, backup, priority support, logo and e-signature.
        const featuresToCheck = [
          features.restApiAccess,
          features.additionalBackup,
          features.prioritySupport,
          features.logo,
          features.eSignature,
        ].filter(Boolean) as string[];

        for (const feature of featuresToCheck) {
          await newInvoiceSteps.verifyFeatures(planName, feature);
        }
      },
    );
  },
);

// Scenario 2: verify client creation and deletion using a random name from faker.
const clientName = faker.person.fullName();

test(
  'Create and delete a client from Clients page',
  {
    tag: ['@homework-07', '@positive'],
    annotation: [{ type: 'New client name', description: clientName }],
  },
  async ({ sharedSteps, landingsSteps, clientsSteps }) => {
    // Login and navigate to the Clients section.
    await sharedSteps.navigateToSite('https://st2016.inv.bg/login/');
    await sharedSteps.login(Credentials.EMAIL, Credentials.PASSWORD);

    await landingsSteps.navigateToClientsPage();
    await clientsSteps.clickNewClient();
    await clientsSteps.createNewClient(clientName);
    await clientsSteps.goToClientsList();

    // Delete the newly created client using the dynamic row checkbox locator and confirm on-page dialog.
    await clientsSteps.deleteNewClient(clientName);
  },
);
