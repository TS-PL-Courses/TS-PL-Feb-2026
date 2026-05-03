import { test } from '@tests/steps/step.factory';
import { Credentials } from '@tests/resourses/enums/Credentials';
import { faker } from '@faker-js/faker';

//scenario 1
[
  {
    scenario: 'New User 1',
    firstName: faker.person.fullName(),
  },
].forEach(({ scenario, firstName }) => {
  test(
    `Login with user ${scenario}`,
    {
      tag: ['@homework-07', '@positive'],
      annotation: [{ type: 'New client name', description: firstName }],
    },
    async ({ sharedSteps, landintSteps, clientsSteps }) => {
      await sharedSteps.navigateToSite('https://st2016.inv.bg/login/');
      await sharedSteps.login(Credentials.EMIAL, Credentials.PASSWORD);
      await landintSteps.navigateToClientsPage();
      await clientsSteps.clickNewClient();
      await clientsSteps.createNewClien(firstName);
      await clientsSteps.goToClientsList();
      await clientsSteps.deleteNewClient(firstName);
    },
  );
});
