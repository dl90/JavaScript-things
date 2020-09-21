/*
  Symbols are a primitive type, always unique and not subject to type coercion
  they are great for avoiding unintentional name collisions

  Symbols began as a way to create private object members, a feature JavaScript developers wanted for a long time. Before symbols, any property with a string name was easy to access regardless of the obscurity of the name, and the “private names” feature was meant to let developers create non-string property names. That way, normal techniques for detecting these private names wouldn’t work.

  Symbols are unique among JavaScript primitives in that they don’t have a literal form, like true for booleans or 42 for numbers
*/
const a = Symbol(1)
const b = Symbol(1)
console.log(a === b)
console.log(typeof Symbol(1))

const id = Symbol('id')
const obj = {
  [id]: 1, // symbol keys need []
  test: 2
}

console.log(obj, obj[id]) // getting val with symbol key
console.log(Object.keys(obj), Object.getOwnPropertyNames(obj)) // nothing
console.log(JSON.stringify(obj)) // {"test":2}

const newIdRef = Object.getOwnPropertySymbols(obj) // symbol
console.log('\ngetting symbol from obj', newIdRef, obj[newIdRef[0]]) // value
console.log(Reflect.ownKeys(obj))

/*
  Symbol.for(key)

  The Symbol.for() method first searches the global symbol registry to see if a symbol with the key "uid" exists. If so, the method returns the existing symbol. If no such symbol exists, then a new symbol is created and registered to the global symbol registry using the specified key. The new symbol is then returned. That means subsequent calls to Symbol.for() using the same key will return the same symbol.

  The global symbol registry is a shared environment, just like the global scope. That means you can’t make assumptions about what is or is not already present in that environment. Use namespacing of symbol keys to reduce the likelihood of naming collisions when using third-party components. For example, jQuery code might use "jquery." to prefix all keys, for keys like "jquery.element" or similar.
*/
const uniqueA = Symbol.for('uid')
const uniqueB = Symbol.for('uid')
console.log('\nuniqueA === uniqueB:', uniqueA === uniqueB)

/*
  Symbol.keyFor()

  Another unique aspect of shared symbols is that you can retrieve the key associated with a symbol in the global symbol registry by calling the Symbol.keyFor() method.
*/
console.log('\nsymbol key:', Symbol.keyFor(uniqueA))

/*
  symbols cannot be coerced into strings or numbers so that they cannot accidentally be used as properties that would otherwise be expected to behave as symbols

  console.log works because it calls .toString()
*/
// const err1 = uniqueA + '' // TypeError: Cannot convert a Symbol value to a string
// const err2 = uniqueA + 1 // TypeError: Cannot convert a Symbol value to a number

/*
  ECMAScript 6 has predefined symbols called well-known symbols that represent common behaviors in JavaScript that were previously considered internal-only operations. Each well-known symbol is represented by a property on the Symbol object, such as Symbol.create.

    Symbol.hasInstance - A method used by instanceof to determine an object’s inheritance.
    Symbol.isConcatSpreadable - A Boolean value indicating that Array.prototype.concat() should flatten the collection’s elements if the collection is passed as a parameter to Array.prototype.concat().
    Symbol.iterator - A method that returns an iterator.
    Symbol.match - A method used by String.prototype.match() to compare strings.
    Symbol.replace - A method used by String.prototype.replace() to replace substrings.
    Symbol.search - A method used by String.prototype.search() to locate substrings.
    Symbol.species - The constructor for making derived objects.
    Symbol.split - A method used by String.prototype.split() to split up strings.
    Symbol.toPrimitive - A method that returns a primitive value representation of an object.
    Symbol.toStringTag - A string used by Object.prototype.toString() to create an object description.
    Symbol.unscopables - An object whose properties are the names of object properties that should not be included in a with statement.
*/
