// use the api.automation.spec.ts in the project for reference
// you will need to create new steps and api methods for this scenario, but you can use the existing ones as an example of how to implement them

// scenario :

// create a new client using API request in docs "https://api.inv.bg/v3/docs#tag/clients/operation/postClient"
// note you have a request body example in the docs! Use Interfaace for its type. Create the interface in the correct place in your project and import it in your scenario file.
// verify response status
// get the client id from the response of the create request

// get the client details of the client you created "https://api.inv.bg/v3/docs#tag/clients/operation/getClientByID"
// verify response status
// and verify that the created client details are correct, verify as many details as you can

// update the client details with 1 new value of your choice "https://api.inv.bg/v3/docs#tag/clients/operation/patchClientByID"
// verify response status

// verify that the client details are updated correctly by getting the client details again
// verify response status
// verify the updated value

// delete the client "https://api.inv.bg/v3/docs#tag/clients/operation/deleteClientByID"
// verify response status

import { test } from '@tests/steps/fixtures';
import { CreateClient } from '@lib/resourses/enums/Interfaces';

test(`Create, Update,  Client`, { tag: '@api' }, async ({ apiSteps }) => {
  // Test data for creating a new client:
  const createClient: CreateClient = {
    name: 'Фирма ЕООД',
    town: 'София',
    address: 'Славееви гори 21',
    bulstat: '112233445566',
    is_reg_vat: false,
    vat_number: 'BG112233445566',
    mol: 'Георги Йорданов',
    is_person: false,
    egn: 8210129421,
    country: 'Германия',
    code: 'Client-79832',
    office: 'Горни Брод, централен офис.',
    delivery_address: 'ул. Климент Охридски № 125',
    name_en: 'Firma EOOD',
    town_en: 'Sofia',
    address_en: 'Slaveevi gori 21',
    mol_en: 'Georgi Jordanov',
    country_en: 'Germany',
    custom_properties: [
      {
        key: 'лицензионен-номер',
        value: '12049092',
        use_in_invoices: true,
      },
    ],
  };

  await apiSteps.postCreateClient(createClient);
  await apiSteps.verifyResponseStatus(201);
  const clientId: number = Number(await apiSteps.getElementValue('$.id'));

  await apiSteps.getClient(clientId);
  await apiSteps.verifyResponseStatus(200);
  await apiSteps.verifyElementStringValue('$.name', createClient.name);
  await apiSteps.verifyElementStringValue('$.town', createClient.town);
  await apiSteps.verifyElementStringValue('$.address', createClient.address);
  await apiSteps.verifyElementStringValue('$.bulstat', createClient.bulstat);
  await apiSteps.verifyElementBooleanValue('$.is_reg_vat', createClient.is_reg_vat);
  await apiSteps.verifyElementStringValue('$.vat_number', createClient.vat_number);
  await apiSteps.verifyElementStringValue('$.mol', createClient.mol);
  await apiSteps.verifyElementBooleanValue('$.is_person', createClient.is_person);
  await apiSteps.verifyElementNumberValue('$.egn', createClient.egn);
  await apiSteps.verifyElementStringValue('$.country', createClient.country);
  await apiSteps.verifyElementStringValue('$.code', createClient.code);
  await apiSteps.verifyElementStringValue('$.coffice', createClient.office);
  await apiSteps.verifyElementStringValue('$.delivery_address', createClient.delivery_address);
  await apiSteps.verifyElementStringValue('$.name_en', createClient.name_en);
  await apiSteps.verifyElementStringValue('$.town_en', createClient.town_en);
  await apiSteps.verifyElementStringValue('$.address_en', createClient.address_en);
  await apiSteps.verifyElementStringValue('$.mol_en', createClient.mol_en);
  await apiSteps.verifyElementStringValue('$.country_en', createClient.country_en);
  await await apiSteps.verifyElementStringValue(
    '$.custom_properties[0].key',
    createClient.custom_properties[0].key,
  );
  await apiSteps.verifyElementStringValue(
    '$.custom_properties[0].value',
    createClient.custom_properties[0].value,
  );
  await apiSteps.verifyElementBooleanValue(
    '$.custom_properties[0].use_in_invoices',
    createClient.custom_properties[0].use_in_invoices,
  );

  // Update client details with new name and verify the updated name in the response:
  createClient.name = 'Тест Николета Фирма ЕООД';
  await apiSteps.patchUpdateClient(clientId, createClient);
  await apiSteps.verifyResponseStatus(204);
  await apiSteps.getClient(clientId);
  await apiSteps.verifyResponseStatus(200);
  await apiSteps.verifyElementStringValue('$.name', createClient.name);

  await apiSteps.deleteClient(clientId);
  await apiSteps.verifyResponseStatus(204);
});
