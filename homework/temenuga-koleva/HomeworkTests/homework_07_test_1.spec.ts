import { test } from '@tests/steps/fixtures';
import { Credentials } from '@lib/resourses/enums/Credentials';

[
  {
    scenario: 'corporate plan',
    username: Credentials.EMAIL,
    password: Credentials.PASSWORD,
    name: 'Корпоративен',
    euro: 'по договаряне',
    bgn: '',
    text: 'за интегриране при вас',
    clientNumber: 'неограничени',
    invoices: 'неограничени',
    employeesNumber: 'неограничени',
  },
  {
    scenario: 'business plan',
    username: Credentials.EMAIL,
    password: Credentials.PASSWORD,
    name: 'Бизнес',
    euro: '28 €/месец',
    bgn: '54.76 лв./месец',
    text: 'най-много възможности',
    clientNumber: '1000 клиента',
    invoices: '1000 фактури/месец',
    employeesNumber: '25 служителя',
  },
  {
    scenario: 'small business plan',
    username: Credentials.EMAIL,
    password: Credentials.PASSWORD,
    name: 'Малък бизнес',
    euro: '8 €/месец',
    bgn: '15.65 лв./месец',
    text: 'оптималният план',
    clientNumber: '150 клиента',
    invoices: '150 фактури/месец',
    employeesNumber: '10 служителя',
  },
  {
    scenario: 'personal plan',
    username: Credentials.EMAIL,
    password: Credentials.PASSWORD,
    name: 'Персонален',
    euro: '4 €/месец',
    bgn: '7.82 лв./месец',
    text: 'за работещи индивидуално',
    clientNumber: '15 клиента',
    invoices: '15 фактури/месец',
    employeesNumber: '1 служителя',
  },
  {
    scenario: 'free plan',
    username: Credentials.EMAIL,
    password: Credentials.PASSWORD,
    name: 'Безплатен',
    euro: '0 €/месец',
    bgn: '0 лв./месец',
    text: '',
    clientNumber: '5 клиента',
    invoices: '5 фактури/месец',
    employeesNumber: '1 служителя',
  },
].forEach(
  ({
     scenario,
     username,
     password,
     name,
     euro,
     bgn,
     text,
     clientNumber,
     invoices,
     employeesNumber
    }) => {
  test(
    `verify plan: ${scenario}`,
    {
      tag: ['@ui', '@login', '@positive'],
      annotation: [
        { type: 'username', description: username },
        { type: 'password', description: password },
      ],
    },
    async ({ sharedSteps, landintSteps, newInvoiceSteps, planSteps }) => {
      await sharedSteps.navigateToSite('https://st2016.inv.bg/login/');
      await sharedSteps.login(username, password);
      await landintSteps.navigateToNewInvoicePage();
      await newInvoiceSteps.navigateToPlansPage();
      await planSteps.verifyPlan(name, euro, bgn, text, clientNumber, invoices, employeesNumber);

    },
  );
});
