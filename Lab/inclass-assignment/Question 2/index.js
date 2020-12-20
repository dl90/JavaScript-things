// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

console.log(capitalize('look, it is working!'));

function capitalize (str) {
  const strWordArr = str.split(" ");
  let returnStr = ""

  for (ele of strWordArr) {
    returnStr += ele.substring(0, 1).toUpperCase() + ele.substring(1) + " ";
  }

  returnStr = returnStr.trim();
  if (returnStr.length === str.trim().length) {
    return returnStr;
  } else {
    return new Error("Something went wrong...");
  }
}

module.exports = capitalize;
