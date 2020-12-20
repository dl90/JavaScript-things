/*
Instructions for Lab 4:
Provide complete implementations of all the function stubs below. Pay close attention
to what you should be returning in each function. Each function should have a
unit test that it corresponds to. You may use Jest, or any other unit testing framework
like Mocha/Chai, etc. YOU MAY WORK WITH A PARTNER. Lab is due at end of class.
*/


// adds 2 to inputted number
// ex: addTwo(5); -> 7
// ex: addTwo(6); -> 8
function addTwo (number) {
  number = number + 2;
  return number;
}

// adds the two inputted numbers together
// ex: add(5, 10); -> 15

function add (num1, num2) {
  let sum = num1 + num2;
  return sum;
}

// adds all three inputted numbers together
// ex: addd(1,2,3); -> 6
// ex: addd(2,4,2); -> 8
function addd (value1, value2, value3) {
  let sum = value1 + value2 + value3;
  return sum;
}

// subtracts the second inputted number from the first inputted number
// ex: subtract(5, 10); -> -5
function subtract (n1, n2) {
  let result = n1 - n2;
  return result;
}

// multiplies the inputted number by 2
// ex: multiplyByTwo(5); -> 10
// ex: multiplyByTwo(6); -> 12
function multiplyByTwo (numero) {
  let result = numero * 2;
  return result;
}


// multiplies all three inputted numbers together
// ex: multiplyy(1,2,3); -> 6
// ex: multiplyy(2,2,3); -> 12
function multiplyy (a, b, c) {
  let result = (a * b) * c;
  return result;
}

// returns the square of the inputted number
// do not use built-in method
// ex: square(5); -> 25
function square (value) {
  let result = value ** 2;
  return result;
}

// determines if the number is odd
// outputs true if the number is odd
// outputs false if the number is even
// ex: isOdd(4); -> true
// ex: isOdd(5); -> false
function isOdd (num) {
  let result = num % 2;
  if (result === 1) {
    return true;
  } else {
    return false;
  }
}

// determines if the number is negative
// outputs true if the number is negative
// outputs false if the number is zero or positive
// ex: isNegative(-1); -> true
// ex: isNegative(1); -> false
// ex: isNegative(0); -> false
function isNegative (num) {
  if (num >= 0) {
    return false;
  } else {
    return true;
  }
}

// returns the absolute value of the inputted number
// ex: positive(-1); -> 1
// ex: positive(1); -> 1
function positive (num) {
  let abs = Math.abs(num);
  return abs;
}

// Returns boolean of whether argument is classified as a Number object
// isNumber(5); → true
// isNumber('hi'); → false
function isNumber (value) {
  let result = Number.isInteger(value);
  return result;
}
//console.log(isNumber("abcd"));

// Returns boolean of whether argument is classified as an Array object
// isArray(5); → false
// isArray([1,2,3]); → true
function isArray (value) {
  let result = Array.isArray(value);
  return result;
}

// Returns boolean of whether argument is classified as an Object
// isObject(5); → false
// isObject([1,2,3]); → true
function isObject (value) {
  let result = typeof value === 'object' && value !== null;
  return result;
}
//console.log(isObject([1,2,3]));
//console.log(isObject(22));

// return boolean of whether argument is classified as null
// isNull(null); -> true
// isNull(5); -> false
function isNull (value) {
  if (value === null) {
    return true;
  } else {
    return false;
  }
}
//console.log(isNull(null));
//console.log(isNull("null"));


// this function accepts an array of numbers
// and returns an array of only the odd numbers
// ex: returnOdds([1,2,3,4,5,6,7]); -> [1,3,5,7]
function returnOdds (array) {
  let newArr = [];
  for (let i = 0; i < array.length; i += 2) {
    //console.log(i);
    let value = array[i];
    newArr.push(value);
  }
  return newArr;
}
//console.log(returnOdds([1,2,3,4,5,6]));

// this function accepts an array of numbers
// and returns an array of only the even numbers
// ex: returnEvent([1,2,3,4,5,6,7]); -> [2,4,6]
function returnEvens (array) {
  let newArr = [];
  for (let i = 1; i < array.length; i += 2) {
    let value = array[i];
    newArr.push(value);
  }
  return newArr;
}

// returns only the max element from the inputted array of numbers
// ex: findMax([1,25,6,3]); -> 25
function findMax (array) {
  let bigNum = 0;
  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    //console.log(value);
    if (value >= bigNum) {
      bigNum = value;
    }
  }
  return bigNum;
}
//console.log(findMax([2,3,4,1,5,12,31,22,4,2,0,-20]));

/**
 * remove leading and trailing whitespace or specified characters from string
 * trim(' hello '); -> 'hello'
 */
function trim (string) {
  return string.trim();
}

/**
 *
 * Write a function called "getProperty". Given an object and a key, "getProperty" returns the value of
 * the property at the given key. Notes: If there is no property at the given key, it should return undefined.
 *
 */

/* =====SAMPLE RUN=====
var obj = {
  //key: 'value'
};
var output = getProperty(obj, 'key');
console.log(output); // --> 'value'
=====================================*/
function getProperty (obj, key) {
  let result = obj.key;
  return result;
}

/**
 *
 * Write a function called "addProperty". Given an object and a key, "addProperty" sets a new property
 * on the given object with a value of true.
 *
 */

/* =====SAMPLE RUN=====
var myObj = {};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty); // --> true
=====================================*/
function addProperty (obj, key) {
  obj.key = true;
  //console.log(obj.key);
  return obj;
}

/**
 *
 * Write a function called "removeProperty". Given an object and a key,
 *  "removeProperty" removes the given key from the given object.
 *
 */

/* =====SAMPLE RUN=====
var obj = {
  name: 'Armaan',
  age: 70
}
removeProperty(obj, 'name');
console.log(obj.name); // --> undefined
=====================================*/

function removeProperty (obj, key) {
  delete obj[key];
  //console.log(obj);
  return obj;
}

// User will input 3 words into function. You must return a single number representing how many vowels
// were found in all three words combined
function getAllVowels (word1, word2, word3) {
  let total = 0;
  let vowels = "aeiouAEIOU";
  let words = word1 + word2 + word3;
  for (let i = 0; i < words.length; i++) {
    if (vowels.indexOf(words[i]) !== -1) {
      //console.log("enters");
      total = total + 1;
    }
  }
  return total;
}
//console.log(getAllVowels("abcde","fghi","jklmno"));

// Given an number and an object, "removeStringValuesLongerThan" removes any properties on the given object
// whose values are strings longer than the given number.

/* =====SAMPLE RUN=====
var obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};
removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }

=====================================*/


function removeStringValuesLongerThan (num, obj) {
  let arrOfStrings = Object.keys(obj);
  //console.log(arrOfStrings);

  for (let i = 0; i < arrOfStrings.length; i++) {
    let prop = arrOfStrings[i]
    //console.log(prop);
    if (obj[prop].length > num) {
      delete obj[prop];
    }
  }
  return obj;
}


// Given a character and a string, "getIndexOf" returns the first position of the given character in the given string.
/*
Rules:
-Strings are zero indexed, meaning the first character in a string is at position 0.
-When a string contains more than one occurrence of a character, it should return the index of its first occurrence.
-If the character does not exist in the string, it should return -1.
-Do not use the native indexOf function in your implementation.
*/

/* =====SAMPLE RUN=====
var output = getIndexOf('a', 'I am a terrible hacker');
console.log(output); // --> 2
=====================================*/

function getIndexOf (char, str) {
  let state = 0;
  let arrOfPositions = [];
  for (let i = 0; i < str.length; i++) {
    if (char === str.charAt(i)) {
      arrOfPositions.push(i);
    } else {
      state = -1;
    }
  }
  if (arrOfPositions.length === 0) {
    return state;
  } else {
    return arrOfPositions[0];
  }
}

//Given an array and an object, "select" returns a new object whose properties are
//those in the given object AND whose keys are present in the given array.
/*
Rules:
- If keys are present in the given array, but are not in the given object, it should ignore them.
- It does not modify the passed in object.
*/

/* =====SAMPLE RUN=====
var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }
=====================================*/



function select (arr, obj) {
  let arrOfStrings = Object.keys(obj);
  let newObj = {};
  //console.log(arrOfStrings);

  for (let objProperty in obj) {
    //console.log(obj[objProperty]);
    if (arr.includes(objProperty)) {
      newObj[objProperty] = obj[objProperty];
    }
  }
  return newObj;
}

// === These questions are OPTIONAL and NOT for lab marks. You will get a bonus mark however for completing them if you provide a correct implementation ===

// Iterates over elements of an array invoking callback for each element. The callback should be passed the element, the current index, and the entire array.
// var callback = function(element, index, array) {
//  console.log(element +"," +index +"," +array);
// }
// forEach(['a','b','c'], callback); → prints a,0,[1,2,3] b,1,[1,2,3] c,2,[1,2,3]
// For each element in the array, the callback we passed is called. The callback can be customized, but in the above example, the callback prints out the element, index, and entire array.
function forEach (array, callback) {
  for (let item of array) {
    callback(item, array.indexOf(item), array);
  }
}
/*
var callback = function(element, index, array) {
 console.log(element + "," + index + "," + array);
}
forEach(['a','b','c'], callback);*/

// Creates an array of values by running each element in collection through callback
// Callback (element/value, index/key, array)
// map([1,2,3], function(element, index, array) {
//  return element * 3;
// }); -> [3,6,9]
function map (array, callback) {
}

// Iterates over elements of collection, returning an Array of all elements callback returns truthy for.
// Objects passed in should be flattened to a values-only Array first.
// filter([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); → [2,4]
// filter({a: 1, b: 2,c: 3,d: 4}, function(element, index, collection) {
//  return element % 2 !== 0;
// }); → [1,3]
function filter (collection, callback) {
}

// Creates an array without duplicate values from the inputted array.
// The order of the array is preserved.
// uniq([1,2,1]); → [1,2]
function uniq (array) {
  let newArr = [];

  array.forEach(function (element) {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }

  });
  return newArr;
}
//console.log(uniq([1,1,2]));


// Reduces collection to a value which is the accumulated result of running each element in collection through iteratee,
// where each successive invocation is supplied the return value of the previous.
// If accumulator is not provided the first element of collection is used as the initial value.
// If a start parameter is not provided, then set the start value as the zeroth index
// reduce([1,2], function(stored,current) {
//  return stored + current;
// }); → 3
// reduce([1,2], function(stored,current) {
//  return stored + current;
// },1); → 4
function reduce (array, callback, start) {
}

module.exports = {
  addTwo, add, addd, subtract, multiplyByTwo,
  multiplyy, square, isOdd, isNegative, positive,
  isNumber, isArray, isObject, isNull, returnOdds,
  returnEvens, findMax, trim, getProperty, addProperty,
  removeProperty, getAllVowels, removeStringValuesLongerThan,
  getIndexOf, select
};
