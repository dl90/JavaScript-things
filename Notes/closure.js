/*
  Whenever a function accesses a variable that is declared outside of it, we say it is a closure.
  Some people will refer to the nested function itself as “the closure”.
  Others might refer to the technique of accessing the outside variables as the closure.

  Local variables that are used by inner functions remains until the inner function is executed

  There are also languages like Rust which implement closures, but have a separate syntax for closures and regular functions.
  So if you want to read a variable from outside a function, you would have to opt into that in Rust.
  This is because under the hood, closures may require the engine to keep the outer variables (called “the environment”) around even after the function call.
  This overhead is acceptable in JavaScript, but it can be a performance concern for the very low-level languages.
*/
function enclose() {
  let test = "testing"

  this.print = () => {
    console.log(test)
    testChange()
    console.log(test)
  }

  function testChange() {
    test = "not testing"
  }
}

const test = new enclose()
test.print()