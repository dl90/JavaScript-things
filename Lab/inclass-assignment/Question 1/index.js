// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

console.log(anagrams('abcdefg!@#', 'gfedcba'));

function anagrams (stringA, stringB) {
  const strALower = stringA.toLowerCase().match(/[a-z]+/g).join(); // regix (multiple a to z)
  const strBLower = stringB.toLowerCase().match(/[a-z]+/g).join(); // /g => global match (whole string)

  const strAObj = {}, strBObj = {};
  const strAArr = [], strBArr = [];
  let state = true;

  populate(strALower, strAObj, strAArr);
  populate(strBLower, strBObj, strBArr);

  function populate (str, obj, arr) {
    for (let i = 0; i < str.length; i++) {
      if (obj[str.charAt(i)]) {
        obj[str.charAt(i)] += 1;
      } else if (str.charAt(i) === ",") {
        continue;
      } else {
        obj[str.charAt(i)] = 1;
        arr.push(str.charAt(i));
      }
    }
  }

  if (Object.keys(strAObj).length === Object.keys(strBObj).length) {
    for (let i = 0; i < Object.keys(strAObj).length; i++) {
      // if the values for each key do not match (number of letters do not match)
      if (strBObj[strAArr[i]] !== strAObj[strAArr[i]]) {
        state = false;
      }
    }
  } else {
    state = false;
  }

  console.log(...Object.entries(strAObj));
  console.log(...Object.entries(strBObj));
  return state;
}

module.exports = anagrams;
