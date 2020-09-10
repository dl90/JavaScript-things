/**
 * @author Don (dl90)
 * @note Inheritance in JavaScript (pre ES6)
 */

/* extend one object from another (object based inheritance) */
/* Inheritance through prototype chaining */


/* New Objects by default inherits all Object prototype  */
const Test = {
  "root": "parent",
  "print": function () {
    console.log(this._id, this._name)
  }
}
// console.log(Parent.hasOwnProperty("name"), Object.getPrototypeOf(Parent) === Object.prototype);


/* explicitly assign custom prototype to object (inherit from anther object) */
Test.prototype = {
  constructor: Test,
  getRoot: function () { return this.root }, // needs apply due to using this
  setRoot: function (arg) { this.root = arg }
}

/* override inherited properties by redefining with same namespace (if property is configurable) */
const testCase1 = Object.create(Test, { //Test.prototype
  "_id": {
    writable: true,
    value: 1
  },
  "_name": {
    writable: true,
    value: "Jeff"
  }
});
// console.log({ testCase1 }, testCase1._id, testCase1._name)
// console.log(Object.getPrototypeOf(testCase1))
// console.log(Object.prototype) // prototype search ends at Object
// testCase1.root = "test";
// console.log(testCase1.prototype.getRoot.apply(testCase1))
// testCase1.print()


/* object based */
const Car = new Object();
Object.defineProperties(Car, {
  "model": {
    writable: true,
    value: "N/A"
  },
  "year": {
    writable: true,
    value: "N/A"
  }
})
Car.drive = function () { console.log("how do you turn this on") }


const Honda = Object.create(Car, {
  "price": {
    writable: true,
    value: 2000
  }
});
Honda.toString = function () { return `Honda ${this.model} ${this.year} ${this.price}` };

const BMW = Object.create(Car, {
  "price": {
    writable: true,
    value: 20000
  }
})
BMW.toString = function () { return `BMW ${this.model} ${this.year} ${this.price}` };


Honda.model = "Civic"
Honda.year = 2000
BMW.model = "M3"
BMW.year = 2010
// console.log(Honda.toString(), "\n", BMW.toString())
// Honda.drive()



/* constructor based */
function Doctor (name) {
  Object.defineProperties(this, {
    "_name": {
      writable: true,
      value: name
    },
    "name": {
      get: () => { return this._name },
      set: (arg) => { typeof arg === 'string' ? this._name = arg : console.log('name input error') }
    }
  })
}
Doctor.prototype = {
  constructor: Doctor,
  treat: function () { return "treating" },
  toString: function () {
    return `[Doc: ${this.name}]`
  }
}

function Surgeon (name, type) {
  this.name = name;
  Object.defineProperties(this, {
    "_type": {
      writable: true,
      value: type
    },
    "type": {
      get: () => { return this._type },
      set: (arg) => { typeof arg === 'string' ? this._type = arg : console.log('type input error') }
    }
  })
}
Surgeon.prototype = new Doctor() // inherits all Doctor properties as Surgeon prototype
Surgeon.prototype.constructor = Surgeon;
Surgeon.prototype.toString = function () { return `[Surg: ${this.name} ${this.type}]` }
/* Note: using literal assignment overrides parent prototypes */
// Surgeon.prototype = {
//   constructor: Surgeon,
//   toString: function () {
//     return `[Surg: ${this.name} ${this.type}]`
//   }
// }

// const test1 = new Doctor("test1")
// console.log({ test1 }, test1.toString())
// test1.name = "Bob"
// console.log(test1.name, test1.toString(), test1.treat(), test1 instanceof Surgeon, "\n")

// const test2 = new Surgeon("test2", "surgeon")
// console.log({ test2 }, test2.toString())
// test2.name = "Dug";
// test2.type = "Trauma"
// console.log(test2.name, test2.type, test2.toString(), test2.treat(), test2 instanceof Surgeon, "\n")





function Boat (model, year) {
  Object.defineProperties(this, {

    "_model": {
      writable: true,
      value: model
    },
    "_year": {
      writable: true,
      value: year
    },
    "model": {
      enumerable: true,
      get: () => { return this._model },
      set: (arg) => { this._model = arg }
    },
    "year": {
      enumerable: true,
      get: () => { return this._year },
      set: (arg) => { this._year = arg }
    }
  })
}
Boat.prototype = {
  constructor: Boat,
  "drive": function () {
    return `Drive boat: ${this._model}`
  },
  "toString": function () {
    return `Boat ${this._model}`
  }
}

function SmallBoat (model, year) {
  Boat.call(this, model, year)
}
SmallBoat.prototype = new Boat()
SmallBoat.prototype.constructor = SmallBoat
SmallBoat.prototype.toString = function () {
  return `This is SmallBoat: ${this.model} ${this.year}`
}
SmallBoat.prototype.drive = function () {
  return Boat.prototype.drive.call(this) + " from SmallBoat prototype";
}

function LargeBoat (model, year) {
  /* Note: no super in JavaScript so parent constructor is invoked with call */
  Boat.call(this, model, year)
}
LargeBoat.prototype = new Boat()
LargeBoat.prototype.constructor = LargeBoat
LargeBoat.prototype.toString = function () {
  return `This is LargeBoat: ${this.model} ${this.year}`
}
LargeBoat.prototype.drive = function () {
  return Boat.prototype.drive.call(this) + " from LargeBoat prototype";
}

const testBoat1 = new SmallBoat("a", 2005)
testBoat1.model = "Smaller"
console.log(testBoat1.drive(), "\t", testBoat1.toString())

const testBoat2 = new LargeBoat("b", 2006)
testBoat2.model = "Larger"
console.log(testBoat2.drive(), "\t", testBoat2.toString())