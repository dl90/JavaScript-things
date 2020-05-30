/**
 * @author Don (dl90)
 */

/* IIFE (immediately invoked function expressions) */
const account = (function () {

  /* scoped to the anonymous function (inaccessible outside scope) */
  let balance = 100;
  Object.defineProperties(this, {
    "_id": {
      writable: true,
      value: 1
    },
    "_privateArg": {
      writable: false,
      value: "secret"
    }
  });


  function getBalance() { return balance };
  function addBalance(arg) { balance += arg; return balance };
  function getId() { return _id }
  function setId(arg) { _id = arg }

  return {
    /* exposed */
    "name": "test",
    /* revealing module (functions) */
    getBalance: getBalance,
    addBalance: addBalance,
    getId: getId,
    setId: setId,
  }
})();

console.log({ account })
console.log(account._id, account._privateArg, account.getId())
account.setId(3)
console.log(account._id, account.getId())
console.log(account.getBalance())
account.balance = 10000 // assigned to the outer scope && does not affect internal balance
console.log(account.addBalance(200))
console.log({ account })

