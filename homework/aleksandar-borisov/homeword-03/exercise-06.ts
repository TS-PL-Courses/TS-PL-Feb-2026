enum AccountType {
  'Current' = 1,
  'FlexSave' = 4,
  'Deposit' = 2,
}

const clientData1 = { name: 'Pesho', accountType: AccountType.Current };
const clientData2 = { name: 'Maria', accountType: AccountType.FlexSave };
const clientData3 = { name: 'Ivan', accountType: AccountType.Deposit };

type Client = {
  name: string;
  accountType: AccountType;
};

const clients: Client[] = [clientData1, clientData2, clientData3];

for (const client of clients) {
  console.log(client.name, client.accountType);
}
