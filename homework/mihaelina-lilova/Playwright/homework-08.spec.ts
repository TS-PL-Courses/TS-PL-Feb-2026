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
import { ClientDetails } from '@lib/resourses/enums/Interfaces';

test('Create and delete client', { tag: ['@homework08'] }, async ({ apiSteps }) => {
  // Test data for creating a new client:
  const clientDetails: ClientDetails = {
    name: 'Файър ЕООД',
    town: 'Пловдив',
    address: 'бул. България 12',
    bulstat: '123456789012',
    is_reg_vat: true,
    vat_number: 'BG123456789012',
    mol: 'Ивелина Петрова',
    is_person: false,
    egn: 8703074480,
    country: 'Великобритания',
    code: 'Client-79847',
    office: 'Мол Плаза, ет. 4, офис 18',
    delivery_address: 'ул. Съединение № 12',
    name_en: 'Fire EOOD',
    town_en: 'Plovdiv',
    address_en: 'Bulgaria blvd 12',
    mol_en: 'Ivelina Petrova',
    country_en: 'UK',
    custom_properties: [
      { key: 'partner1', value: 'Woodwork LTD' },
      { key: 'partner2', value: 'Fireproof EOOD' },
    ],
  };

  await apiSteps.postCreateClient(clientDetails);
  await apiSteps.verifyResponseStatus(201);
  const clientId: number = Number(await apiSteps.getElementValue('$.id'));

  await apiSteps.getClient(clientId);
  await apiSteps.verifyResponseStatus(200);
  await apiSteps.verifyElementStringValue('$.name', clientDetails.name);
  await apiSteps.verifyElementStringValue('$.town', clientDetails.town);
  await apiSteps.verifyElementStringValue('$.address', clientDetails.address);
  await apiSteps.verifyElementStringValue('$.mol', clientDetails.mol);
  await apiSteps.verifyElementBooleanValue('$.is_person', clientDetails.is_person);
  await apiSteps.verifyElementStringValue('$.country', clientDetails.country);
  await apiSteps.verifyElementStringValue('$.code', clientDetails.code);
  await apiSteps.verifyElementStringValue('$.office', clientDetails.office);
  await apiSteps.verifyElementStringValue('$.delivery_address', clientDetails.delivery_address);
  if (clientDetails.is_person) {
    await apiSteps.verifyElementNumberValue('$.egn', clientDetails.egn);
  } else {
    await apiSteps.verifyElementStringValue('$.bulstat', clientDetails.bulstat);
    await apiSteps.verifyElementBooleanValue('$.is_reg_vat', clientDetails.is_reg_vat);
    if (clientDetails.is_reg_vat) {
      await apiSteps.verifyElementStringValue('$.vat_number', clientDetails.vat_number);
    }
  }

  // Update client details with new address and verify the updated adddress in the response:
  clientDetails.address = 'ул. Марица 142';
  await apiSteps.patchUpdateClient(clientId, clientDetails);
  await apiSteps.verifyResponseStatus(204);
  await apiSteps.getClient(clientId);
  await apiSteps.verifyResponseStatus(200);
  await apiSteps.verifyElementStringValue('$.address', clientDetails.address);

  await apiSteps.deleteClient(clientId);
  await apiSteps.verifyResponseStatus(204);
});
