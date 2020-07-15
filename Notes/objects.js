/**
 * @author Don (dl90)
 * @note Objects review
 */

// create objects with bindings
const [abc, bcd] = ["short", "hand"];
const shortHand = { abc, bcd };
// console.log({ shortHand })



/* checking reference types */
const obj = { a: 1 }
const arr = [1, 2, 3]
const func = () => { console.log(1) }

// console.log(obj instanceof Object)
// console.log(arr instanceof Array)
// console.log(func instanceof Function)

/* 
  Note all other reference types are derived from the object type in JS 
  This means that using instanceOf Object will pretty much always return true for all reference type data 
*/

// console.log(arr instanceof Object)
// console.log(func instanceof Object)



/* checking null */
// console.log(Object === null);

// let str = 'abc'
// console.log(str.charAt(10) == null);
// console.log(str.charAt(10) == 0)

let test = new Object()
test.x = 'abc'
let x = test
// console.log(test === x, x.x)



/* garbage collect */
test = null;
// console.log(test, x.x) // x still points to obj in memory

/* all references to obj in memory are removed => memory will be freed by JS engine */
// x = null;
// console.log(x) 

/* Wrapper types object representing primitive types */
// Number String Boolean

const account = {
  account_number: 1234,
  1: 2000,
  2: 4000,
  "account holds": "None to be specified"
}
/* 
  Note: the in operator lists all enumerable properties but does not differentiate between inherited and assigned
  To check if property is owned by the object (assigned?) instead of inherited
  use obj.hasOwnProperty("property_name")
*/
// console.log(account.hasOwnProperty("account_number"));

/* To check if property is enumerable (non enumerable properties are built in / internal (in built objects) properties) */
// console.log(account.propertyIsEnumerable("toString"), account.propertyIsEnumerable("length"), account.propertyIsEnumerable(1));

/* [[PUT]] => allocate new memory (new object/object property) */
/* [[SET]] => reassign memory (changing existing object property) */



/*
  The difference between setting a property to undefined and actually deleting it is:
    setting undefined, the object still has the property (it just doesn’t have a very interesting value)
    deleting the property => no longer present and "in" will not include it.

  Note: the delete statement also returns a boolean indication success && possibility of deleting property
*/
account.account_number = undefined;
// console.log(Object.keys(account));
// console.log("\t" + ("account_number" in account)); // in for string and objects

delete account.account_number;
for (let key in account) {
  // console.log(key, account[key]);
}



/* Duplicate && assign additional properties through existing object*/
const copyAccount = {};
// assigns account properties to copy account (copies its properties)
Object.assign(copyAccount, account);
Object.assign(copyAccount, { 3: 123, 4: 321 });
// console.log(JSON.stringify({ account }, null, 2), JSON.stringify({ copyAccount }, null, 2));



/* Accessors and Mutator (getter and setters) */
// these are Object properties in JS
const creditCard = {
  "_name": "John",

  // accessor (getter)
  get name() { return this._name },

  // mutator (setter)
  set name(arg) { this._name = arg }
}
// console.log(creditCard.name, creditCard.name = "Doe", creditCard)
/* Note: though not always needed, accessors and mutator properties allows additional logic to be incorporated */

const getOnly = {
  "_pw": "abc",
  get pw() { return this._pw }
}
// console.log(getOnly.pw = 1, getOnly)

const setOnly = {
  "_email": "test@test.com",
  set email(arg) { this._email = arg }
}
// console.log(setOnly, setOnly.email = "new@new.com", setOnly) // console.log evaluate setter first?!?!



/* --- property attributes (encapsulation) --- */
/* By default assigned properties are enumerable and configurable */
const testCase = { "_id": 1 };

/* add or modify property attributes */
/* Note: configurable && enumerable apply to both data properties (key/value) and accessor properties (get/set) */
/* value && writable only applies to data properties */
/*
  configurable?: boolean;
  enumerable?: boolean;
  value?: any;
  writable?: boolean;
  get?(): any;
  set?(v: any): void;
*/
Object.defineProperty(testCase, "_id",
  {
    enumerable: false,  // false ? "_id" no longer accessible via for in loops, Object.keys
    configurable: false // false ? "_id" can't be deleted or reconfigure with defineProperty again
  }
);
// prints nothing due to enumerable = false
for (let key in testCase) {
  console.log(key, testCase[key])
}
// console.log(testCase.propertyIsEnumerable("_id"), Object.keys(testCase), "_id" in testCase, testCase._id);
testCase._id = 2 // value can be changed but not deleted && attribute can not be modified
// console.log(delete testCase._id, "_id" in testCase, testCase._id);
try {
  Object.defineProperty(testCase, "_id",
    {
      enumerable: true,
      configurable: false
    }
  );
} catch (error) {
  // console.log(error.message);
}

/* adding data properties && property attributes through defineProperty */
const testCase2 = new Object();
Object.defineProperty(testCase2, "testValue",
  {
    /* Note not specifying these defaults to false when using defineProperty */
    enumerable: true,
    configurable: true,

    /* data property specific attributes */
    value: "Injected property",
    writable: false // false = readonly
  }
)
// console.log({ testCase2 }, testCase2.propertyIsEnumerable("testValue"));
testCase2.testValue = "NULL";
// console.log({ testCase2 }); // property did not change



/* Adding accessor (get) and mutator (set) properties && attributes through defineProperty */
const testCase3 = {
  "_code": "FBI open up"
};
Object.defineProperty(testCase3, "code",
  {
    enumerable: true, // false ? hides get and set property
    configurable: false, // false ? can't change (redefine) property attributes with defineProperty once initialized, can't delete property

    // accessor and mutator only attributes
    get: function () { return this._code }, // remove ? set only (can still set with explicit property key)
    set: function (arg) { this._code = arg } // remove ? get only
  }
)
// console.log(testCase3.code, "|", testCase3.code = "open sesame", "|", { testCase3 }, "|", "code" in testCase3);
// console.log(testCase3._code = null, "|", testCase3.code, "| Enumerable: ", testCase3.propertyIsEnumerable("code"), "| ownProperty: ", testCase3.hasOwnProperty("code"));
// delete testCase3.code;
// console.log(testCase3.code, "|", "code" in testCase3);


/* multi property define with defineProperties */
const testCase4 = { "_id": 2 };
Object.defineProperties(testCase4,
  {
    // data property
    "_name":
    {
      enumerable: false, // hidden from Object.keys && for in loops
      configurable: false, // can't delete or reconfigure
      value: "Big Daddy Brad Traversy",
      writable: true // can be changed
    },

    // accessor property (getter/setter)
    "name":
    {
      enumerable: true,
      configurable: false,
      get: function () { return this._name },
      set: function (arg) { arg !== undefined && String(arg).trim().length > 3 ? this._name = arg : null }
    }
  }
);
// console.log({ testCase4 }, "|", testCase4.name,
//   "| tries to set undefined: ", testCase4.name = undefined,
//   "| tries to delete accessor: ", delete testCase4.name,
//   "| name still in object: ", "name" in testCase4);
// console.log(testCase4.name)



/* reading property attributes */
const descriptor = Object.getOwnPropertyDescriptor(testCase4, "name"),
  getFunc = descriptor.get;
// console.log(descriptor.enumerable, descriptor.configurable)
// console.log(descriptor.get.toString())
// console.log(descriptor.set.toString())
// console.log(descriptor.value, descriptor.writable)
// console.log(typeof getFunc, getFunc instanceof Function, getFunc.call(testCase4))



/* --- object attributes --- */

/* extensible => defaults true, object properties can be added/changed/deleted */
const objAttr1 = new Object({ "name": "Joe" });
// console.log({ objAttr1 }, Object.isExtensible(objAttr1))

/* non extensible => can't add new object properties ** but still can change and delete existing object properties ** */
Object.preventExtensions(objAttr1)
// console.log(objAttr1, Object.isExtensible(objAttr1))
objAttr1.test = true; // fails silently unless 'strict mode'
try {
  Object.assign(objAttr1, { "test2": false })
} catch (error) {
  // console.log(error.message)
}
objAttr1.name = "ttt"
// console.log(objAttr1)
delete objAttr1.name
// console.log("test" in objAttr1, { objAttr1 })


/* seal => non extensible && non configurable */
/* can't add/change object properties and all object property attributes are not configurable (delete/change config settings)*/
const objAttr2 = { "name": "John", "test": true };
// console.log(Object.isExtensible(objAttr2), Object.isSealed(objAttr2));
Object.seal(objAttr2)
// console.log(Object.isExtensible(objAttr2), Object.isSealed(objAttr2));
delete objAttr2.name; // can't delete
objAttr2.email = "abc@aaa.com" // can't add

/* can't change type of property (data property) */
Object.defineProperty(objAttr2, "name",
  {
    enumerable: true, // can't change
    configurable: false, // can't change
    value: "test", // can change
    writable: false // can change (if all properties are set to false, object.isFrozen is true)
  }
)
objAttr2.name = "Joe"
// console.log(Object.isExtensible(objAttr2), Object.isSealed(objAttr2), Object.isFrozen(objAttr2));
// console.log({ objAttr2 })

const objAttr2Descriptor = Object.getOwnPropertyDescriptor(objAttr2, "name")
// console.log(objAttr2Descriptor.enumerable, objAttr2Descriptor.configurable)
// console.log(objAttr2Descriptor.value, objAttr2Descriptor.writable)


/* freeze => object is sealed && ALL properties are non writable (readonly) */
/* Note: throws error when change attempted with 'strict mode'; */
const objAttr3 = { "name": "James" }
// console.log(Object.isExtensible(objAttr3), Object.isSealed(objAttr3), Object.isFrozen(objAttr3));
Object.freeze(objAttr3);
// console.log(Object.isExtensible(objAttr3), Object.isSealed(objAttr3), Object.isFrozen(objAttr3));
objAttr3.name = "no name";
// console.log({ objAttr3 });

const objAttr3Descriptor = Object.getOwnPropertyDescriptor(objAttr3, "name")
// console.log(objAttr3Descriptor.enumerable, objAttr3Descriptor.configurable)
// console.log(objAttr3Descriptor.value, objAttr3Descriptor.writable)



const License = new Object();
Object.defineProperties(License,
  {
    "name": {
      enumerable: false,
      configurable: true,
      value: "test",
      writable: true
    },
    "number": {
      enumerable: true,
      configurable: false,
      value: 1,
      writable: true
    }
  }
)
const [license_name, license_number] = [Object.getOwnPropertyDescriptor(License, "name"), Object.getOwnPropertyDescriptor(License, "number")]
console.log(license_name.enumerable, license_name.configurable, license_name.value, license_name.writable)
console.log(license_number.enumerable, license_number.configurable, license_number.value, license_number.writable)
Object.seal(License);
try {
  Object.defineProperty(License, "test", {
    value: "a",
    writable: true
  })
} catch (error) {
  console.log(error.message)
}
console.log({ License }, ...Object.keys(License))
