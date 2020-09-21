/* IIFE (immediately invoked function expressions) */
const account = (function () {
  /* balance scoped to the anonymous function (inaccessible outside scope) */
  let balance = 100
  Object.defineProperties(this, {
    _id: {
      enumerable: true, // still inaccessible
      configurable: true,
      writable: true,
      value: 1
    },
    _privateArg: {
      writable: false,
      value: 'secret'
    }
  })

  function getBalance () { return balance };
  function addBalance (arg) { balance += arg; return balance };
  function getId () { return _id }
  function setId (arg) { _id = arg }

  return {
    /* exposed properties */
    name: 'test',

    /* revealing module (functions) */
    getBalance,
    addBalance,
    getId,
    setId
  }
})()

console.log({ account })
console.log(account._id, account._privateArg, account.getId())
account.setId(3)
console.log(account._id, account.getId())
console.log(account.getBalance(), account.addBalance(200))
account.balance = 10000 // assigned to the outer scope && does not affect internal balance
console.log(account.getBalance())
console.log({ account })
