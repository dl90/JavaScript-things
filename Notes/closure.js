
/*
  Execution context:

  Program starts in the global execution context.
  Entering functions/method calls creates a new local execution context.
  Execution contexts are tracked in a stack (call stack | execution stack).

  Exiting a function (return or '}') pops the stack.
  Any return values are now stored in the parent/caller execution context.
  The functions execution context is released and garbage collected if no other references exist.

    > When a function execution context is created, the parameters/args of the function are declared first.
    > Variable search starts in local context, then steps out to parent context, until it reaches global
*/

function enclose () {
  let test = false

  this.print = () => {
    testChange()
    console.log(test)
  }

  function testChange () {
    test = true

    /*
      Generate infinite contexts, will overflow call stack

      const x = new enclose()
      x.print()
    */
  }
}

// const test = new enclose()
// test.print()
// test.print()

// scope
var x = 5
function f () {
  x = 6
  var x = 11 // without this declaration, the x scoped globally is changed
  console.log('Within f() x =', x) // ending the call destroys all local variables
}

// console.log('Before f: x =', x)
// f()
// console.log('After f: x =', x)

/*
  Function definition creates the function and it's closure.
  The closure contains all variables scoped to the function at time of creation.

  1. global execution context sets count to 10 and defines counter func
  2. counter is called and it creates a new local execution context
  3. local context sets count to 0
  4. local context defines returns arrow function, along with its closure, which includes variables within it's scope (count)
  5. the arrow function and its closure is assigned to ref
  6. local execution context created while calling counter is deleted, but ref still retains the closure tied to the arrow function
  6. ref is called repeatedly and the arrow function increments in the same closure and prints the scoped count
*/

let count = 10
let _count = 10
function counter () {
  let count = 0
  let x = _count++

  return () => {
    console.log(count++)
    console.log(' -> ', x)
  }
}

const ref = counter()
for (let i = 0; i < 10; i++) {

  // counter()()    /* global _count increments */
  // ref()          /* local count increments */
  // console.log('--------')
}

const addX = x => n => n + x
const addThree = addX(3)  /* x is assigned 3, returns a function that adds 3 */
// console.log(addThree(4))  /* calls function passing it 4 */

function sum (a) {
  let sum = a
  const func = (b) => {
    sum += b
    return func
  }

  func.getSum = () => sum
  return func
}
console.log(sum(1)(2)(3)(4)(5).getSum())
