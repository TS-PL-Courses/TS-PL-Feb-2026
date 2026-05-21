import { APIRequestContext, APIResponse } from '@playwright/test';
import Logger from '@lib/tools/Logger';
import { ClientDetails, ItemDetails } from '@lib/resourses/enums/Interfaces';

export default class InvBgApi {
  readonly request: APIRequestContext;
  private readonly baseUrl: string;
  private readonly headers: Record<string, string>;

  constructor(request: APIRequestContext) {
    this.request = request;
    this.baseUrl = 'https://api.inv.bg/v3';
    this.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.TOKEN}`,
      'Accept-Language': 'bg',
    };
  }

  /**
   * Sends token generation request to the API
   * @type {string} email - user's credentials
   * @type {string} password - user's credentials
   * @returns {Promise<APIResponse>}
   */
  async postGenerateToken(email: string, password: string): Promise<APIResponse> {
    // Prepare the data for the request
    const url: string = this.baseUrl + '/login/token ';
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const body = {
      email: email,
      password: password,
      domain: 'st2016',
    };

    // Log the request details and hide sensitive information in logs
    await Logger.logRequestDetails('POST', url, headers, body);

    // Make the POST request to aquire the token
    const response: APIResponse = await this.request.post(url, { headers: headers, data: body });

    // Log the response details
    await Logger.logResponseDetails(response);

    return response;
  }

  /**
   * Sends a GET items request and returns items list
   * @returns {Promise<APIResponse>}
   */
  async getItemsList(): Promise<APIResponse> {
    // Prepare the data for the request
    const url: string = this.baseUrl + '/items';

    // Log the request details and hide sensitive information in logs
    await Logger.logRequestDetails('GET', url, { ...this.headers, Authorization: `Bearer ******` });

    // Make the GET request to show item list
    const response: APIResponse = await this.request.get(url, {
      headers: this.headers,
    });

    // Log the response details
    await Logger.logResponseDetails(response);

    return response;
  }

  /**
   * Sends a GET item request and return item details
   * @returns {Promise<APIResponse>}
   */
  async getItem(id: number): Promise<APIResponse> {
    // Prepare the data for the request
    const url: string = this.baseUrl + `/items/${id}`;

    // Log the request details and hide sensitive information in logs
    await Logger.logRequestDetails('GET', url, {
      ...this.headers,
      Authorization: `Bearer ******`,
    });

    // Make the GET request to show item details
    const response: APIResponse = await this.request.get(url, { headers: this.headers });

    // Log the response details
    await Logger.logResponseDetails(response);

    return response;
  }

  /**
   * Creates a new Item
   * @type {ItemDetails} itemDetails - The details of the item to be created, including name, price, currency, price for quantity, quantity unit, limited status, catalog number, outside ID, English name, and tags.
   * @returns {Promise<APIResponse>}
   */
  async createItem({
    name,
    price,
    currency,
    price_for_quantity,
    quantity_unit,
    is_limited,
    catalog_number,
    outside_id,
    name_en,
    tags,
  }: ItemDetails): Promise<APIResponse> {
    // Prepare the data for the request
    const url: string = this.baseUrl + '/items';
    const body = {
      name: name,
      price: price,
      currency: currency,
      price_for_quantity: price_for_quantity,
      quantity_unit: quantity_unit,
      is_limited: is_limited,
      catalog_number: catalog_number,
      outside_id: outside_id,
      name_en: name_en,
      tags: tags,
    };

    // Log the request details and hide sensitive information in logs
    await Logger.logRequestDetails(
      'POST',
      url,
      {
        ...this.headers,
        Authorization: `Bearer ******`,
      },
      body,
    );

    // Make the POST request to create the item
    const response: APIResponse = await this.request.post(url, {
      headers: this.headers,
      data: body,
    });

    // Log the response details
    await Logger.logResponseDetails(response);

    return response;
  }

  /**
   * Sends an PATCH item request to update item details
   * @returns {Promise<APIResponse>}
   */
  async patchItem(
    id: number,
    {
      name,
      price,
      currency,
      price_for_quantity,
      quantity_unit,
      is_limited,
      catalog_number,
      outside_id,
      name_en,
      tags,
    }: ItemDetails,
  ): Promise<APIResponse> {
    // Prepare the data for the request
    const url: string = this.baseUrl + `/items/${id}`;

    const body = {
      name: name,
      price: price,
      currency: currency,
      price_for_quantity: price_for_quantity,
      quantity_unit: quantity_unit,
      is_limited: is_limited,
      catalog_number: catalog_number,
      outside_id: outside_id,
      name_en: name_en,
      tags: tags,
    };

    // Log the request details and hide sensitive information in logs
    await Logger.logRequestDetails(
      'PATCH',
      url,
      { ...this.headers, Authorization: `Bearer ******` },
      body,
    );

    // Make the PATCH to update the item details:
    const response: APIResponse = await this.request.patch(url, {
      headers: this.headers,
      data: body,
    });

    // Log the response details in case of error to facilitate debugging
    await Logger.logResponseDetails(response);

    return response;
  }

  /**
   * Deletes an item
   * @returns {Promise<APIResponse>}
   */
  async deleteItem(id: number): Promise<APIResponse> {
    // Prepare the data for the request
    const url: string = this.baseUrl + `/items/${id}`;

    // Log the request details and hide sensitive information in logs
    await Logger.logRequestDetails('DELETE', url, {
      ...this.headers,
      Authorization: `Bearer ******`,
    });

    // Make the DELETE request to delete the item
    const response: APIResponse = await this.request.delete(url, { headers: this.headers });

    // Log the response details in case of error to facilitate debugging
    await Logger.logResponseDetails(response);

    return response;
  }

  /**
   * Creates a new Client
   * @type {ClientDetails} clientDetails - The details of the client to be created, including name, town, address, bulstat, is_reg_vat, vat_number, mol, is_person, egn, country, code, office, delivery_address, name_en, town_en, address_en, mol_en, country_en, custom_properties,
   * @returns {Promise<APIResponse>}
   */
  async createClient({
    name,
    town,
    address,
    bulstat,
    is_reg_vat,
    vat_number,
    mol,
    is_person,
    egn,
    country,
    code,
    office,
    delivery_address,
    name_en,
    town_en,
    address_en,
    mol_en,
    country_en,
    custom_properties,
  }: ClientDetails): Promise<APIResponse> {
    // Prepare the data for the request
    const url: string = this.baseUrl + '/clients';
    const body = {
      name,
      town,
      address,
      bulstat,
      is_reg_vat,
      vat_number,
      mol,
      is_person,
      egn,
      country,
      code,
      office,
      delivery_address,
      name_en,
      town_en,
      address_en,
      mol_en,
      country_en,
      custom_properties,
    };
    // Log the request details and hide sensitive information in logs
    await Logger.logRequestDetails(
      'POST',
      url,
      {
        ...this.headers,
        Authorization: `Bearer ******`,
      },
      body,
    );

    //Make the POST request to create the client
    const response: APIResponse = await this.request.post(url, {
      headers: this.headers,
      data: body,
    });

    //Log the response details
    await Logger.logResponseDetails(response);

    return response;
  }

  /**
   * Sends a GET client request and return client details
   * @returns {Promise<APIResponse>}
   */
  async getClient(clientId: number): Promise<APIResponse> {
    // Prepare the data for the request
    const url: string = this.baseUrl + `/clients/${clientId}`;

    //Log the request details and hide sensitive information in logs
    await Logger.logRequestDetails('GET', url, {
      ...this.headers,
      Authorization: `Bearer ******`,
    });
    // Make the GET request to show item details
    const response: APIResponse = await this.request.get(url, { headers: this.headers });

    // Log the response details
    await Logger.logResponseDetails(response);

    return response;
  }

  /**
   * Sends an PATCH request to update client details
   * @returns {Promise<APIResponse>}
   */
  async patchClient(
    clientId: number,
    {
      name,
      town,
      address,
      bulstat,
      is_reg_vat,
      vat_number,
      mol,
      is_person,
      egn,
      country,
      code,
      office,
      delivery_address,
      name_en,
      town_en,
      address_en,
      mol_en,
      country_en,
      custom_properties,
    }: ClientDetails,
  ): Promise<APIResponse> {
    // Prepare the data for the request
    const url: string = this.baseUrl + `/clients/${clientId}`;

    const body = {
      name: name,
      town: town,
      address: address,
      bulstat: bulstat,
      is_reg_vat: is_reg_vat,
      vat_number: vat_number,
      mol: mol,
      is_person: is_person,
      egn: egn,
      country: country,
      code: code,
      office: office,
      delivery_address: delivery_address,
      name_en: name_en,
      town_en: town_en,
      address_en: address_en,
      mol_en: mol_en,
      country_en: country_en,
      custom_properties: custom_properties,
    };

    //Log the request details and hide sensitive information in logs
    await Logger.logRequestDetails(
      'PATCH',
      url,
      { ...this.headers, Authorization: `Bearer ******` },
      body,
    );

    //Make the PATCH to update the item details:
    const response: APIResponse = await this.request.patch(url, {
      headers: this.headers,
      data: body,
    });

    // Log the response details in case of error to faciliate debugging
    await Logger.logResponseDetails(response);

    return response;
  }

  async deleteClient(clientId: number): Promise<APIResponse> {
    // Prepare the data for the request
    const url: string = this.baseUrl + `/clients/${clientId}`;

    // Log the request details and hide sensitive information in logs
    await Logger.logRequestDetails('DELETE', url, {
      ...this.headers,
      Authorization: `Bearer ******`,
    });

    // Make the DELETE request to delete the client
    const response: APIResponse = await this.request.delete(url, { headers: this.headers });

    // Log the response details in case of error to faciliate debugging
    await Logger.logResponseDetails(response);

    return response;
  }
}
