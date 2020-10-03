/**
 * @author Don (dl90)
 * @note Object constructor functions (pre ES6)
 */

/* Constructors functions are used to instantiate a 'new' object (similar to Class, uses function) */
function Aircraft () {
  Object.defineProperties(this, {
    _name: {
      enumerable: false,
      configurable: false,
      value: arguments[0] || 'unspecified',
      writable: true
    },
    _type: {
      enumerable: false,
      configurable: false,
      value: arguments[1] || 'unspecified',
      writable: false
    },
    _role: {
      enumerable: false,
      configurable: false,
      value: arguments[2] || 'unspecified',
      writable: false
    },
    name: {
      enumerable: false,
      configurable: false,
      get: () => { return this._name },
      set: (arg) => { this._name = String(arg).trim().length >= 3 ? arg : this._name }
    },
    type: {
      enumerable: false,
      configurable: false,
      get: () => { return this._type }
    },
    role: {
      enumerable: false,
      configurable: false,
      get: () => { return this._type }
    }
  })

  this.print = function () { console.log(this._name, this._type, this._role) }
  // return 1; // returning primitive types will be ignored
}

const A10 = new Aircraft('aaa', 'bbb', 'ccc')
const A11 = new Aircraft()
console.log(A10 instanceof Aircraft, A10.constructor === Aircraft) // A10.constructor.toString()
console.log({ A10 }, Object.keys(A10))
A10.print()
A10._type = 'xyz'
A10.name = '123'
A10.print()
A11.print()

function Laptop (manufacturer, memory, capacity) {
  Object.defineProperties(this, {
    _manufacturer: { // enumerable && configurable defaults to false when using defineProperties w/o explicit assignment
      writable: true,
      value: String(manufacturer)
    },
    _memory: {
      writable: true,
      value: String(memory)
    },
    _capacity: {
      writable: true,
      value: String(capacity)
    }
  })
  this.display = () => { console.log(this._manufacturer, this._memory, this._capacity) }
}

const A = new Laptop('Apple', '16GB', '512GB')
console.log({ A }, ...Object.keys(A))
A.display()
