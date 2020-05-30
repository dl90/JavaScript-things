/**
 * @author Don (dl90)
 * @note Functions review
 */

/* All functions in JavaScript are objects => reference types */
/* Primitive types | Reference types (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures) */
/* primitives = immutable */

// let func = new Function(['console.log(123 - 3)', 'console.log("b")', 'console.log("c")']);
// func()

/* declarative (hoists) */
function name(param) { console.log(param) };

/* expression (!hoists) */
const name1 = function (param) { console.log(param) }

/* Default argument */
function power(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
// console.log(power(5));
// console.log(power(5, 5));


/* Javascript functions can be passed any number of parameter */
/* Extra params are not used but can be accessed */
/* Note: this also means JS does not support function overloading */
/* In cases of functions with the same namespace, The most recently defined function will be used */
function extraArgs(arg) {
  console.log(...arguments) // all arguments passed to function
  console.log(extraArgs.length) // Number of named arguments (arguments in parentheses)
  return "Yes";
};
// extraArgs(1, 2, 3, 4, 5, "No", true, false, null);
// console.log(console.log.length);

function product() {
  let result = 1;
  for (let i = 0; i < arguments.length; i++) {
    result *= arguments[i];
    console.log(arguments[i]);
  }
  return result;
}
// console.log(product(Math.PI, Math.E, Math.SQRT2));
// console.log(product());
// console.log(product(undefined));


/* To implement function overloading, conditionals can be used on arguments */
/* Another way is to explicitly check argument variables against undefined */
function JSOverload() {
  const options = {
    1: () => { return arguments[0] },
    2: () => { return arguments[0] + arguments[1] },
    3: () => { return arguments[0] * arguments[2] + arguments[1] }
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


/* Exponent acts as a counter. */
/* Note: Running through a simple loop is generally cheaper than calling a function multiple times. */
function recursivePower(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * recursivePower(base, exponent - 1);
  }
};
// console.log(recursivePower(2, 3));


/**
 * Multiplier is called and creates an environment in which its factor parameter is bound to 2.
 * The function value it returns, which is stored in twice, remembers this environment.
 * So when that is called, it multiplies its argument by 2
 */
function multiplier(factor) {
  return number => number * factor;
};
// let twice = multiplier(2);
// console.log(twice(5));



/* Interesting function, not the shortest way (trial and error, tires +5 first then *3, like a binary tree). */
function findSolution(target) {
  function find(current, history) {
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
