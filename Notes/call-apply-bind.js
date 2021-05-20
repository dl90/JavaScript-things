
/* print method built in (tight coupling) */
const objExpression = {
  _id: 1,
  _name: 'John',
  print: printIdName
}
objExpression.print()

// external functions (used as methods)
function changeID () {
  this._id = arguments[0]
  if (arguments.length > 1) console.log(arguments)
}
function changeName () {
  this._name = arguments[0]
  if (arguments.length > 1) console.log(arguments)
}
function printIdName () {
  this._id !== undefined && this._name !== undefined
    ? console.log(this._id, this._name)
    : (() => { throw new Error('Undefined id or name') })()
}

const objRef1 = {
  _id: 2,
  _name: 'Doe'
}
const objRef2 = {
  _id: 2,
  _name: 'Doe'
}

/*
  Call
  Note: when no reference is passed to call, it uses the enclosing scope (global/parent)
*/
changeName.call(objRef1, 'Changed')
changeID.call(objRef1, 99)
printIdName.call(objRef1)

function fakeGlobal () {
  this._id = 99999
  this._name = 'global'
  printIdName.call()
  printIdName.call(objRef1)
}
fakeGlobal()
console.log('--------------------------------------------------------------------------------')

/*
  Apply
  same as call, used to pass reference, but args must be passed as an array
*/
changeID.apply(objRef1, [9000])
changeName.apply(objRef1, ['Don'])
console.log(objRef1)
changeName.apply(objRef1, { x: 'doesn\'t', y: 'work' }) // args has to be array
console.log(objRef1)
changeName.apply(objRef1, Object.values({ 2: 'second', 1: 'first' }))
console.log(objRef1)
changeName.apply(objRef1, Object.values({ b: 'b', a: 'a' })) // orders only if key parsable as Number
console.log(objRef1)
console.log('--------------------------------------------------------------------------------')

/*
  Bind
  dynamically binds reference and arguments to method/function and returns a pointer to the function to execute
*/
const bindRef1 = changeName.bind(objRef1)
// args can be passed as the second param of .bind or when calling the reference. Default param is the last param (ie event)
const bindRef2 = changeName.bind(objRef2, 'New Name', 'test')

console.log(objRef1);
bindRef1('Bind')
console.log(objRef1);

console.log(objRef2);
bindRef2()
console.log(objRef2);

/* bound references remains */
console.log('\nobjRef1: ', objRef1)
objRef2.xyz = bindRef1
objRef2.xyz('changing objRef1 _name by calling objRef2 property (changeName function thats bound to objRef1)')
delete objRef2.foreignKey

console.log('objRef1: ', objRef1)
console.log('objRef2: ', objRef2)
