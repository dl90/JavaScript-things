
/*
  All functions in JavaScript are objects => reference types
  Primitive types | Reference types (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
  primitives = immutable
*/

// let func = new Function(['console.log(123 - 3)', 'console.log("b")']);
// func()

/* declarative (hoists) */
function name (param) { console.log(param) };

/* expression (!hoists) */
const name1 = function (param) { console.log(param) }

/* Default argument */
function power (base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count++) result *= base;
  return result;
};
// console.log(power(5));
// console.log(power(5, 5));


/*
  Javascript functions can be passed any number of parameter
  Extra params are not used but can be accessed
  Note: this means JS does not support function overloading
  In cases of functions with the same namespace, the last defined function will be used
*/
function extraArgs (arg) {
  console.log(...arguments) // all arguments passed to function
  console.log(extraArgs.length) // Number of named arguments (arguments in parentheses)
  return "Yes";
};
// extraArgs(1, 2, 3, 4, 5, "No", true, false, null);
// console.log(console.log.length);

function product () {
  let result = 1;
  for (let i = 0; i < arguments.length; i++) {
    result *= arguments[i];
    // console.log(arguments[i]);
  }
  return result;
}
// console.log(product(Math.PI, Math.E, Math.SQRT2));
// console.log(product());
// console.log(product(undefined));

/*
  To implement function overloading, conditionals can be used on arguments
  Another way is to explicitly check argument variables against undefined
*/
function JSOverload () {
  const options = {
    1: () => { return arguments[0] },
    2: () => { return arguments[0] + arguments[1] },
    3: () => { return arguments[0] * arguments[1] + arguments[2] }
  }
  if (arguments.length <= 3) {
    return options[arguments.length].call(this);
  } else {
    return new Error('Additional arguments not supported by this function')
  }
}
// console.log(JSOverload(1, 1));
// console.log(JSOverload(5, 5, 2));
// console.log(JSOverload(5, 5, 2, 2));


/*
  Exponent acts as a counter
  Note: Running through a simple loop is generally cheaper than calling a function multiple times.
*/
function recursivePower (base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * recursivePower(base, exponent - 1);
  }
};
// console.log(recursivePower(2, 3));


/*
  Multiplier is called and creates an environment in which its factor parameter is bound to 2.
  The function value it returns, which is stored in twice, remembers this environment (closure)
  So when that is called, it multiplies its argument by 2
*/
function multiplier (factor) {
  return number => number * factor;
};
// let twice = multiplier(2);
// console.log(twice(5));



/* Interesting function, not the shortest way (trial and error, tires +5 first then *3, like a binary tree). */
function findSolution (target) {
  function find (current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
};
// console.log(findSolution(24));

/*
  Short circuit evaluation will only evaluate the right side when necessary
  If its ||, if left side is true, right side is not evaluated.
  If its &&, if left side is false, right side is not evaluated.
*/


/*
  arrow functions do not have its own this or super binding
  cant use call, apply, bind
  no arguments or new.target keywords
  cant be use as constructor or called using new
  cant use yield
*/

const func1 = () => console.log(arguments) // this is pointing to parent scope (global)
const func1Parent = function () {
  return nestedFunc1 = () => console.log(arguments) // arguments from parent scope (function)
}

// func1(1, 2, 3)
// func1Parent(1, 2, 3)()
// console.log(arguments)

const func2 = () => this
const Func2Parent = function () {
  this.func = () => this
}

// console.log(func2() === this)
// const _func2 = new Func2Parent()
// console.log(_func2.func() === _func2)

this.id = 99
const func3 = () => console.log(this.id)
const Func3Parent = function (id) {
  this.id = id
}
Func3Parent.prototype.getId = () => console.log(this.id)
Func3Parent.prototype._getId = function () { console.log(this.id) }

func3.call({ id: 1 })
const func3_1 = new Func3Parent(20)
const func3_2 = new Func3Parent(30)
// func3_1.getId()              // global scope
// func3_1.getId.call(func3_1)  // still global scope
// func3_1._getId()
// func3_1._getId.call(func3_2)
