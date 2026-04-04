//npx ts-node Enums.ts
// Exercise 6: Use an Enum, Object type, and Arrays
// Step 1: Declare an enum of account types with the following values: "Current" = 1, "FlexSave" = 4, "Deposit" = 2
enum AccountType {
  Current = 1,
  FlexSave = 4,
  Deposit = 2,
}
// Step 2: Declare 3 objects with client data containing their name and their card account types as enum values:
// {
//   name: "John Doe",
//   accountType: reference the enum here and assign the account a value,
// }
const client1 = {
  name: ' Mery Popinz',
  accountType: AccountType.Current,
};
const client2 = {
  name: ' Alis Wonder',
  accountType: AccountType.Deposit,
};
const client3 = {
  name: ' Kazanova',
  accountType: AccountType.FlexSave,
};
// Step 3: Add the objects to an array and use a for loop to iterate over the array and log the name and account type of each client in the console
const clients = [client1, client2, client3];
for (let i = 0; i < clients.length; i++) {
  const c = clients[i];
  console.log(`Client: ${c.name} with account type ${AccountType[c.accountType]}`);
}
