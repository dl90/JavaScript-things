// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

maxChar("aa111bb");

function maxChar(str) {
  const strArr = str.split('');
  const strObj = {};

  for(let i = 0; i < strArr.length; i++) {
    if(strObj[strArr[i]] === undefined) {
      strObj[strArr[i]] = 1;
    } else {
      strObj[strArr[i]] += 1;
    }
  }

  let objArr = Object.entries(strObj);
  // console.log(objArr);

  let topPair = [null,0];
  for(let i = 0; i < objArr.length; i++) {

    if(topPair[1] < objArr[i][1]) {
      topPair = objArr[i];
    }
  }

  /**
   * if theres an equal number of occurance
   * the first to occur is the topPair
  */
  console.log(topPair);
  return topPair[0];
}

module.exports = maxChar;
