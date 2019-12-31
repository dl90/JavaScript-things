const account = {
  account_number: 1234,
  1: 2000,
  2: 4000,
  "account holds": "None to be specified"
}

// . calls the property directly
// [] evaluates first then calls the property
console.log(account.account_number);
console.log(account["account holds"]);
console.log(account[1]);
for (let i = 1; i < 3; i++) {
  console.log(account[i]);
}

/*
The difference between setting a property to undefined and actually deleting it is:
    setting undefined, the object still has the property (it just doesn’t have a very interesting value)
    deleting the property => longer present and "in" will not include it.
*/
account.account_number = undefined;
console.log(Object.keys(account));
console.log("\t" + ("account_number" in account)); // in for string and objects

delete account.account_number;
for (value in account) { // returns the key
  console.log(value);
}

const copyAccount = {};
Object.assign(copyAccount, account);
Object.assign(copyAccount, { 3: 123, 4: 321 });

console.log(account);
console.log(copyAccount);