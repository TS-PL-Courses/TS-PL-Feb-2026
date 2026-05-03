import { test } from '@tests/steps/step.factory';
import { Credentials } from '@tests/resourses/enums/Credentials';

[
  //scenario 1
  {
    scenario: 'corporate plan',
    username: Credentials.EMIAL,
    password: Credentials.PASSWORD,
    planName: 'Корпоративен',
    planCost: {
      lv: null,
      euro: null,
      text: 'по договаряне',
    },
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

  //scenario 2
  {
    scenario: 'business plan',
    username: Credentials.EMIAL,
    password: Credentials.PASSWORD,
    planName: 'Бизнес',
    planCost: {
      lv: '54.76 лв./месец',
      euro: '28 €/месец',
      text: null,
    },
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

  //scenario 3
  {
    scenario: 'small business plan',
    username: Credentials.EMIAL,
    password: Credentials.PASSWORD,
    planName: 'Малък бизнес',
    planCost: {
      lv: '15.65 лв./месец',
      euro: '8 €/месец',
      text: null,
    },
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

  //scenario 4
  {
    scenario: 'personal plan',
    username: Credentials.EMIAL,
    password: Credentials.PASSWORD,
    planName: 'Персонален',
    planCost: {
      lv: '7.82 лв./месец',
      euro: '4 €/месец',
      text: null,
    },
    clientNumber: '15 клиента',
    invoices: '15 фактури/месец',
    employeesNumber: '1 служителя',
    features: {
      restApiAccess: null,
      additionalBackup: null,
      prioritySupport: null,
      logo: 'с Ваше лого',
      eSignature: null,
    },
  },

  //scenario 5
  {
    scenario: 'free plan',
    username: Credentials.EMIAL,
    password: Credentials.PASSWORD,
    planName: 'Безплатен',
    planCost: {
      lv: '0 лв./месец',
      euro: '0 €/месец',
      text: null,
    },
    clientNumber: '5 клиента',
    invoices: '5 фактури/месец',
    employeesNumber: '1 служителя',
    features: {
      restApiAccess: null,
      additionalBackup: null,
      prioritySupport: null,
      logo: null,
      eSignature: null,
    },
  },
].forEach(
  ({
    scenario,
    username,
    password,
    planName,
    planCost,
    clientNumber,
    invoices,
    employeesNumber,
    features,
  }) => {
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
            type: 'plan feautures',
            description: [
              features.additionalBackup,
              features.restApiAccess,
              features.prioritySupport,
              features.logo,
              features.logo,
            ]
              .filter(Boolean)
              .join('|'),
          },
        ],
      },
      async ({ sharedSteps, landintSteps, newInvoiceSteps }) => {
        await sharedSteps.navigateToSite('https://st2016.inv.bg/login/');
        await sharedSteps.login(username, password);
        await landintSteps.navigateToNewInvoicePage();
        await newInvoiceSteps.navigateToNewPlan();
        await newInvoiceSteps.verifyPlanName(planName);

        const valuesToCheck = [planCost.lv, planCost.euro, planCost.text].filter(
          Boolean,
        ) as string[];
        for (const value of valuesToCheck) {
          await newInvoiceSteps.verifyPlanCost(value);
        }
        await newInvoiceSteps.verifyEmployee(planName, employeesNumber, invoices, clientNumber);

        const featuresTCheck = [
          features.restApiAccess,
          features.additionalBackup,
          features.prioritySupport,
          features.logo,
          features.eSignature,
        ].filter(Boolean) as string[];
        for (const feature of featuresTCheck) {
          await newInvoiceSteps.verifyFeatures(planName, feature);
        }
      },
    );
  },
);
