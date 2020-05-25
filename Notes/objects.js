const account = {
  account_number: 1234,
  1: 2000,
  2: 4000,
  "account holds": "None to be specified"
}

// . calls the property directly
// [] evaluates first then calls the property
// console.log(account.account_number);
// console.log(account["account holds"]);
// console.log(account[1]);
for (let i = 1; i < 3; i++) {
  // console.log(account[i]);
}

/*
The difference between setting a property to undefined and actually deleting it is:
    setting undefined, the object still has the property (it just doesn’t have a very interesting value)
    deleting the property => longer present and "in" will not include it.
*/
account.account_number = undefined;
// console.log(Object.keys(account));
// console.log("\t" + ("account_number" in account)); // in for string and objects

delete account.account_number;
for (value in account) { // returns the key
  // console.log(value);
}

const copyAccount = {};
// assigns account properties to copy account (copies its properties)
Object.assign(copyAccount, account);
Object.assign(copyAccount, { 3: 123, 4: 321 });

// console.log(account);
// console.log(copyAccount);

// create objects with bindings
const [abc, bcd] = ["short", "hand"];
const shortHand = { abc, bcd };
// console.log(shortHand)

// checking reference types
const obj = { a: 1 }
const arr = [1, 2, 3]
const func = () => { console.log(1) }

// console.log(obj instanceof Object)
// console.log(arr instanceof Array)
// console.log(func instanceof Function)

/* Note all other reference types are derived from the object type in JS */
/* This means that using instanceOf Object will pretty much always return true for all reference type data */

// console.log(arr instanceof Object)
// console.log(func instanceof Object)

// checking null

// console.log(Object === null);

// let str = 'abc'
// console.log(str.charAt(10) == null);
// console.log(str.charAt(10) == 0)

// let obj = new Object()
// obj.x = 'abc'
// let x = obj
// console.log(obj === x)
// console.log(x.x)

// garbage collect
// obj = null;
// console.log(x.x) // x still points to obj in memory
// console.log(obj)

// x = null;
// console.log(x) // all references to obj in memory are removed => memory will be freed by Js engine

// let func = new Function(['console.log(123 - 3)', 'console.log("b")', 'console.log("c")']);
// func()

/* Wrapper types */
// Number String Boolean
