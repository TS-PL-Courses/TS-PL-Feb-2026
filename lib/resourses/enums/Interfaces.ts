interface ItemDetails {
  name: string;
  price: number;
  currency: string;
  price_for_quantity: number;
  quantity_unit: string;
  is_limited: boolean;
  catalog_number: string;
  outside_id: number;
  name_en: string;
  tags: string[];
}

export { ItemDetails };

interface ClientDetails {
  name: string;
  town: string;
  address: string;
  bulstat: string;
  is_reg_vat: boolean;
  vat_number: string;
  mol: string;
  is_person: boolean;
  egn: number;
  country: string;
  code: string;
  office: string;
  delivery_address: string;
  name_en: string;
  town_en: string;
  address_en: string;
  mol_en: string;
  country_en: string;
  custom_properties: { key: string; value: string }[];
}

export { ClientDetails };
