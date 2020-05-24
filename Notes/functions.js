/**
 * @author Don (dl90)
 * @date December 28, 2019
 */


//If the second argument is not given, it defaults to 2.
function power(base, exponent = 2) { 
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}
console.log(power(5));
console.log(power(5, 5));


// Exponent acts as a counter.
// Note: Running through a simple loop is generally cheaper than calling a function multiple times.
function recursivePower(base, exponent) { 
  if (exponent == 0) {
    return 1;
  } else {
    return base * recursivePower(base, exponent - 1);
  }
}
console.log(recursivePower(2, 3));

/**
 * Multiplier is called and creates an environment in which its factor parameter is bound to 2.
 * The function value it returns, which is stored in twice, remembers this environment.
 * So when that is called, it multiplies its argument by 2
 * @param {*} factor 
 */
function multiplier(factor) {
  return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(5));


// Interesting function, not the shortest way (trial and error, tires +5 first then *3, like a binary tree).
function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) || // || changes to other when this returns null.
             find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
}
console.log(findSolution(24));
