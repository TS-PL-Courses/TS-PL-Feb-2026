import { test as baseTest } from '@playwright/test';

import SharedSteps from './Shared.steps';
import LandingSteps from './Landing.steps';
import DocumentsSteps from './Documents.steps';
import NewInvoiceSteps from './NewInvoice.steps';
import PlanSteps from './Plan.steps';
import ClientsSteps from './Clients.steps';
import AddClientSteps from './AddClient.steps';

type MyFixtures = {
  sharedSteps: SharedSteps;
  landingSteps: LandingSteps;
  documentSteps: DocumentsSteps;
  newInvoiceSteps: NewInvoiceSteps;
  planSteps: PlanSteps;
  clientsSteps: ClientsSteps;
  addClientSteps: AddClientSteps;
};

export const test = baseTest.extend<MyFixtures>({
  sharedSteps: async ({ page, context }, use) => {
    await use(new SharedSteps(page, context));
  },
  landingSteps: async ({ page, context }, use) => {
    await use(new LandingSteps(page, context));
  },
  documentSteps: async ({ page, context }, use) => {
    await use(new DocumentsSteps(page, context));
  },
  newInvoiceSteps: async ({ page, context }, use) => {
    await use(new NewInvoiceSteps(page, context));
  },
  planSteps: async ({ page, context }, use) => {
    await use(new PlanSteps(page, context));
  },
  clientsSteps: async ({ page, context }, use) => {
    await use(new ClientsSteps(page, context));
  },
  addClientSteps: async ({ page, context }, use) => {
    await use(new AddClientSteps(page, context));
  },
});
