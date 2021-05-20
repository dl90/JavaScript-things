
/*
  Prototype property is shared between all instances and points to the constructor function's prototype property
    1. Reduces memory usage with many instances
    2. Inheritance with prototype chaining

  Order of property search (scope chain)
    1. Local (owned by object)
    2. Object.prototype (owned by Object.prototype)
    3. Returns undefine if none found
*/
const thing = { name: 'thing' }
const print1 = () => {
  console.log('name' in thing, thing.hasOwnProperty('name'))
  console.log(
    'hasOwnProperty' in thing,
    thing.hasOwnProperty('hasOwnProperty') // hasOwnProperty is inherited from prototype
  )

  // prototype belongs to the JavaScript's Object class and is shared with all object instances
  console.log(Object.prototype.hasOwnProperty('hasOwnProperty'))

  // the objects prototype reference is the same as Object.prototype
  console.log(Object.getPrototypeOf(thing) === Object.prototype) // compares thing.prototype with Object.prototype
  console.log(Object.prototype.isPrototypeOf(thing)) // Object.prototype is the prototype of thing instance
}
// print1()

// overriding inherited prototype properties
const print2 = () => {
  console.log(thing.toString())
  thing.toString = function () { return this.name }
  console.log(thing.toString())
  delete thing.toString
  console.log(thing.toString())
}
// print2()

function Aircraft () {
  Object.defineProperties(this, {
    _name: {
      value: arguments[0] || 'unspecified',
      writable: false
    },
    _type: {
      value: arguments[1] || 'unspecified',
      writable: false
    },
    _role: {
      value: arguments[2] || 'unspecified',
      writable: false
    },
    name: {
      get: () => { return this._name },
      set: (arg) => { this._name = String(arg).trim().length >= 3 ? arg : this._name }
    },
    type: {
      get: () => { return this._type }
    },
    role: {
      get: () => { return this._type }
    }
  })
}

// prototype print is shared by all instances of Aircraft
Aircraft.prototype.print = function () {
  console.log(this._name, this._type, this._role)
}

// Note: constructor functions own prototypes !== instances prototype
const _Aircraft = Object.getPrototypeOf(Aircraft)
_Aircraft.Foo = function () {
  console.log('belongs to constructor function, not the instances returned')
}

Aircraft.Foo()
const bar = new Aircraft()
// bar.Foo() // does not exist
bar.print()
console.log(Object.getPrototypeOf(Aircraft), Object.getPrototypeOf(bar))
console.log(bar.constructor.name, bar instanceof Aircraft)


/*
  defining multiple prototypes

  Note:
    in scripts, Objects instantiated before prototype assignment/changes will not have the new prototype
    in environment, updating prototype dynamically updates the the inheritance chain
      meaning the methods will be available to all existing instances as well
*/
Aircraft.prototype = {

  // Note: constructor property must be included in prototype or this will be treated as a generic object
  // using literal syntax without defining constructor => constructor from Object
  constructor: Aircraft,

  // includes previously defined prototypes
  ...Aircraft.prototype,
  toString: function () {
    return `Name: ${this._name} \t Role: ${this._role}`
  },
  isHelicopter: function () {
    return this._type.toLowerCase() === 'helicopter'
  }
}

const F15 = new Aircraft('F-15', 'Jet', 'Fighter')
const Bell212 = new Aircraft('Bell-212', 'Helicopter', 'Support')

console.log(Object.getPrototypeOf(F15))
console.log(Object.getPrototypeOf(bar))

// Bell212.print()
// console.log(Object.getPrototypeOf(Bell212))
// console.log(Bell212.print, "print" in Bell212);
// console.log(Bell212.toString());

// console.log(Bell212.print(), "print" in Bell212);
// console.log(Bell212.toString(), Bell212.isHelicopter())
// console.log(Bell212.prototype)
// console.log(Aircraft.prototype.isPrototypeOf(Bell212), Object.prototype.isPrototypeOf(Bell212));

// console.log(F15 instanceof Aircraft, F15.constructor === Aircraft)
// console.log(F15 instanceof Object, F15.constructor === Object)

// Native type custom prototypes, use with caution
// String.prototype.display = function () { console.log('Hello') }
// 'test'.display()
