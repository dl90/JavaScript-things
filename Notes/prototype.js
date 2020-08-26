/*
  Prototype property is shared between all instances and points to the constructor function's prototype property
    1. Reduces memory usage with many instances
    2. Inheritance with prototype chaining
*/
const thing = {
  "name": "thing"
};
const print1 = () => {
  console.log("name" in thing, thing.hasOwnProperty("name"));
  console.log("hasOwnProperty" in thing, thing.hasOwnProperty("hasOwnProperty"));
  console.log(thing.hasOwnProperty.toString());

  // prototype belongs to the JavaScript's Object class and is shared with all object instances
  console.log(Object.prototype.hasOwnProperty("hasOwnProperty"));

  // the objects prototype reference is the same as Object.prototype
  console.log(Object.getPrototypeOf(thing) === Object.prototype); // compares thing.prototype with Object.prototype
  console.log(Object.prototype.isPrototypeOf(thing)); // Object.prototype is the prototype of thing instance
}
// print1()

/*
  Order of property search (scope chain)
    1. Local (owned by object)
    2. Object.prototype (owned by Object.prototype)
    3. Returns undefine if none found
*/

// overriding inherited prototype properties
const print2 = () => {
  console.log(thing.toString());
  thing.toString = function () { return this.name };
  console.log(thing.toString());
  delete thing.toString;
  console.log(thing.toString());
}
// print2()


function Aircraft() {
  Object.defineProperties(this, {
    "_name":
    {
      value: arguments[0] || "unspecified",
      writable: true
    },
    "_type":
    {
      value: arguments[1] || "unspecified",
      writable: false
    },
    "_role":
    {
      value: arguments[2] || "unspecified",
      writable: false
    },
    "name":
    {
      get: () => { return this._name },
      set: (arg) => { String(arg).trim().length >= 3 ? this._name = arg : null }
    },
    "type":
    {
      get: () => { return this._type },
    },
    "role":
    {
      get: () => { return this._type },
    }
  });
}


// print function moved to prototype which is shared by all instances of Aircraft
Aircraft.prototype.print = function () { console.log(this._name, this._type, this._role) };

/*
  defining multiple prototypes
  Note: Objects instantiated before prototype assignment/changes => those instances will not have the new prototype
*/
Aircraft.prototype = {

  // Note: constructor property must be included in prototype or this will be treated as a generic object
  // using literal syntax without defining constructor => constructor from Object
  constructor: Aircraft,

  toString: function () {
    return `Name: ${this._name} \t Role: ${this._role}`
  },
  isHelicopter: function () {
    if (this._type.toLowerCase() === "helicopter") {
      return true;
    } else {
      return false;
    }
  }
}

const F15 = new Aircraft("F-15", "Jet", "Fighter");
const Bell212 = new Aircraft("Bell-212", "Helicopter", "Support");

// Bell212.print()
// console.log(Bell212.print(), "print" in Bell212);
// console.log(Bell212.toString());

// console.log(Bell212.print(), "print" in Bell212);
console.log(Bell212.toString(), Bell212.isHelicopter());
console.log(Bell212.prototype)
// console.log(Aircraft.prototype.isPrototypeOf(Bell212), Object.prototype.isPrototypeOf(Bell212));

// console.log(F15 instanceof Aircraft, F15.constructor === Aircraft)
// console.log(F15 instanceof Object, F15.constructor === Object)


// Native type custom prototypes, use with caution
String.prototype.display = function () { console.log("Hello") }
"test".display()
