// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//palindrome("ab b ba")
function palindrome(str) {
  let state = false;
  const strArr = str.split('');

  const oddEven = (arr) => {
    let num = 0;

    if ((arr.length % 2) === 0) {
      num = arr.length / 2;
    } else {
      num = (arr.length + 1) / 2;
    }
    return num
  }
  const arrLength = oddEven(strArr);

  // console.log(arrLength);
  // console.log(strArr.length);

  let firstHalfStr = "";
  for (let i = 0; i < arrLength; i++) {
    firstHalfStr += strArr[i];
  }

  let reduceCounter = 0;
  if ((strArr.length / arrLength) === 2) {
    reduceCounter = arrLength;
  } else {
    reduceCounter = arrLength - 1;
  }

  let secondHalfStr = "";
  for (let i = strArr.length - 1; i >= reduceCounter; i--) {
    secondHalfStr += strArr[i];
  }

  // console.log(firstHalfStr);
  // console.log(secondHalfStr);

  if (firstHalfStr === secondHalfStr) {
    state = true;
  }

  console.log(state);
  return state;
}

module.exports = palindrome;
