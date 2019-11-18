// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//console.log(anagrams('testabc!@#', 'abc test'));

function anagrams(stringA, stringB) {
  let state = true;

  const strALower = stringA.toLowerCase().match(/[a-z]+/g).join();
  const strBLower = stringB.toLowerCase().match(/[a-z]+/g).join();

  const strAObj = {};
  const strBObj = {};

  const strAArr = [];
  const strBArr = [];

  //adds to strA object and arr (excluding ',')
  for( let i = 0; i < strALower.length; i++) {
    if (strAObj[strALower.charAt(i)] ) {
      strAObj[strALower.charAt(i)] += 1;
    } else if (strALower.charAt(i) === ",") {
      continue;
    } else {
      strAObj[strALower.charAt(i)] = 1;
      strAArr.push(strALower.charAt(i));
    }
  }

  //adds to strB object and arr (excluding ',')
  for( let i = 0; i < strBLower.length; i++) {
    if (strBObj[strBLower.charAt(i)] ) {
      strBObj[strBLower.charAt(i)] += 1;
    } else if (strBLower.charAt(i) === ",") {
      continue;
    } else {
      strBObj[strBLower.charAt(i)] = 1;
      strBArr.push(strBLower.charAt(i));
    }
  }

  // console.log(strAArr);
  // console.log(strBArr);

  //strAObj to strBobj comparasion
  if(Object.keys(strAObj).length === Object.keys(strBObj).length) {
    for( let i = 0; i < Object.keys(strAObj).length; i++) {
      if(strBObj[strAArr[i]] !== strAObj[strAArr[i]]) {
        state = false;
      }
    }
  } else {
    state = false;
  }

  //console.log(Object.entries(strAObj));
  return state;
}

module.exports = anagrams;

