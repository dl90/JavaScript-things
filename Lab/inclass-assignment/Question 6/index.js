// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// vowels('Hi There!?');

function vowels(str) {
  const vowelsArr = ['a', 'e', 'i', 'o', 'u'];
  let strArr = str.toLowerCase().split('');
  let counter = 0;

  // console.log(strArr);
  for(ele of strArr) {
    if(vowelsArr.includes(ele)) {
      counter += 1;
    }
  }

  // console.log(counter);
  return counter;
}

module.exports = vowels;
